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
  Card,
  CardMedia,
  InputLabel,
  MenuItem,
  Select,
  AlertTitle,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material';
import Dropzone from 'react-dropzone';
import {
  Genre,
  useAddBookMutation,
  useUploadFileMutation,
} from '../../graphql/generated/gql';
import Toast from '../Toast';

interface FormData {
  title: string;
  author: string;
  coverImageUrl: string;
  description?: string;
  genre?: string;
  coverImage?: FileList | null;
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
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [addBook, { loading: addBookLoading, error: addBookSubmissionError }] =
    useAddBookMutation();
  const [
    uploadFile,
    { loading: uploadBookLoading, error: uploadFileSubmissionError },
  ] = useUploadFileMutation();

  const isFormSubmitting = addBookLoading || uploadBookLoading;

  const handleFormSubmit = async (data: FormData) => {
    try {
      const { data: responseData } = await await uploadFile({
        variables: {
          file: data.coverImage,
        },
      });

      const coverImageUrl = responseData?.uploadFile?.url || '';
      // Submit form data (including file URL)
      const formData = {
        title: data.title,
        author: data.author,
        description: data.description,
        genre: data.genre,
        coverImage: coverImageUrl,
      };
      await addBook({
        variables: {
          input: formData,
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      // reset form
      setSubmissionSuccess(true);
      reset();
      setCoverImageUrl('')
    }
  };
  const handleCoverImageChange = (files: File[]) => {
    if (files.length > 0) {
      const file = files[0];
      setValue('coverImage', file as unknown as FileList, {
        shouldValidate: true,
      });
      setCoverImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleFormSubmit)}>
      {submissionSuccess ? (
        <Toast
          severity='success'
          title='Success'
          body='Book successfully added'
        />
      ) : null}

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h5' component='h1' gutterBottom textAlign="center">
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
              <MenuItem value={Genre.Fiction}>Fiction</MenuItem>
              <MenuItem value={Genre.Nonfiction}>Non Fiction</MenuItem>
              <MenuItem value={Genre.Romance}>Romance</MenuItem>
              <MenuItem value={Genre.Thriller}>Thriller</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={Boolean(errors.coverImage)}>
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
            {errors.coverImage && (
              <FormHelperText>{errors.coverImage?.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box
            textAlign='right'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Button
              variant='contained'
              color='primary'
              type='submit'
              disabled={isFormSubmitting}
              sx={{
                minWidth: '10rem',
                marginX: 5,
              }}
            >
              {isFormSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </StyledForm>
  );
};

export default AddBookForm;
