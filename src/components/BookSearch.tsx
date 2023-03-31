import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import { BookPayload, useSearchBookQuery } from '../graphql/generated/gql';
import { Box, Typography } from '@mui/material';

const AutocompleteEnhanced = styled(Autocomplete)`
  background-color: #ffff;
  width: 350px;

  ${(props) => props.theme.breakpoints.down("sm")} {
    width: 250px;
  }
`;

export default function BookSearch() {
  const [options, setOptions] = useState<BookPayload[]>([]);
  const [selectedValue, setSelectedValue] = useState<BookPayload | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const { data, loading } = useSearchBookQuery({
    variables: {
      term: searchTerm,
    },
  });

  const fetchOptions = useMemo(
    () =>
      debounce((input: string) => {
        setSearchTerm(input);
      }, 500),
    []
  );

  useEffect(() => {
    let isMounted = true;

    if (inputValue === '') {
      setOptions(selectedValue ? [selectedValue] : []);
    }

    fetchOptions(inputValue);

    if (!loading && data && isMounted) {
      let newOptions: BookPayload[] = [];
      if (selectedValue) {
        newOptions = [selectedValue];
      }
      newOptions = [...newOptions, ...(data?.searchBook as [])];
      setOptions(newOptions);
    }

    return () => {
      isMounted = false;
    };
  }, [inputValue, loading, data, selectedValue, fetchOptions]);

  return (
    <AutocompleteEnhanced
      id='books-search'
      disableClearable
      noOptionsText='Search for books'
      getOptionLabel={(option: any) => option.name || ''}
      renderOption={(_, option: any) => (
        <Box sx={{ display: 'flex', padding: 2 }} key={option?.title}>
          <img
            src={option.coverImage}
            alt={option.title}
            style={{ width: 50 }}
          />
          <Box sx={{ paddingLeft: 2 }}>
            <Typography variant='body1'>{option.title}</Typography>
            <Typography variant='caption'> by {option.author}</Typography>
          </Box>
        </Box>
      )}
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      filterSelectedOptions
      options={options}
      value={selectedValue}
      onChange={(event, selectedValue: any) => {
        setOptions(selectedValue ? [selectedValue, ...options] : options);
        setSelectedValue(selectedValue);
        if (selectedValue && event.type === 'click') {
          router.push({
            pathname: './request',
            query: {
              service: selectedValue?.name,
              serviceId: selectedValue?.id,
            },
          });
        }
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder='What book are you looking for?'
          InputProps={{
            ...params.InputProps,
            type: 'search',
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color='inherit' size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
