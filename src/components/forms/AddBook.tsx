import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Box,
  FormControl,
  FormHelperText,
  StyledComponentProps,
  Card,
  CardMedia,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { styled } from '@mui/material';
import Dropzone from 'react-dropzone';
import { MUIStyledCommonProps } from '@mui/system';

interface FormData {
  title: string;
  author: string;
  coverImageUrl: string;
  description?: string;
  genre?: string;
  file: FileList | null;
}

type GetColorProps = {
  isDragAccept: boolean;
  isDragReject: boolean;
  isFocused: boolean;
};

const Container = styled('div')`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(3),
}));

const AddBookForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Upload file to cloud storage and get url
      const fileUrl = '';

      // Submit form data (including file URL)
      const formData = {
        title: data.title,
        author: data.author,
        coverImageUrl: data.coverImageUrl,
        fileUrl,
      };
      console.log(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleCoverImageChange = (files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      setValue('file', file as unknown as FileList, {
        shouldValidate: true,
      });
      setCoverImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h1' gutterBottom>
            Add a new book
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='title'
            label='Title'
            {...register('title', { required: true })}
            error={Boolean(errors.title)}
            helperText={errors.title && 'Title is required'}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id='author'
            label='Author'
            {...register('author', { required: true })}
            error={Boolean(errors.author)}
            helperText={errors.author && 'Author is required'}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            id='description'
            label='Description'
            {...register('description')}
            error={Boolean(errors.description)}
            helperText={errors.description && errors.description.message}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id='genre-label'>Genre</InputLabel>
            <Select
              labelId='genre-label'
              id='genre'
              label='Genre'
              {...register('genre')}
            >
              <MenuItem value='Fiction'>Fiction</MenuItem>
              <MenuItem value='Thriller'>Thriller</MenuItem>
              <MenuItem value='Documentary'>Documentary</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.file)}>
            <Dropzone
              accept={{
                'image/jpeg': [],
                'image/png': [],
              }}
              maxFiles={1}
              onDrop={(acceptedFiles) => handleCoverImageChange(acceptedFiles)}
            >
              {({ getRootProps, getInputProps }) => (
                <>
                  <Container {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag and drop a cover image for the book, or click to
                      select an image
                    </p>
                    {coverImageUrl ? (
                      <Container
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Card sx={{ maxWidth: 250 }}>
                          <CardMedia
                            component='img'
                            image={coverImageUrl}
                            width={200}
                            height={200}
                            alt='cover'
                          />
                        </Card>
                      </Container>
                    ) : null}
                  </Container>
                </>
              )}
            </Dropzone>
            {errors.file && (
              <FormHelperText>{errors.file?.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box textAlign='right'>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default AddBookForm;
