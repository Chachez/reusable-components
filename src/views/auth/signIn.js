import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import * as Yup from "yup";

import { useTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

import Copyright from "../../components/Layout/footer";
import useCustomForm from "../../components/Forms/useForm";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

// Validation schema
export const validationSchema = Yup.object().shape({
  username: Yup.string().required("Required Field"),
  password: Yup.string().required("Required Field"),
});

const SignIn = () => {
  const theme = useTheme();

  const onSubmit = (formValues) => {
    console.log(formValues);
    console.log("Form submitted with data:", formValues);
  };

  const { register, submitHandler, errors } = useCustomForm({
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box component="form" onSubmit={submitHandler} sx={{ mt: 1 }}>
            <FormControl fullWidth sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-username">
                Username
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-username"
                {...register("username")}
                label="Username"
                autoComplete="none"
              />

              <FormHelperText error={!!errors.username?.message}>
                {errors.username?.message}
              </FormHelperText>
            </FormControl>

            <FormControl
              fullWidth
              sx={{ ...theme.typography.customInput, mt: "1rem" }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                {...register("password")}
                label="Password"
                autoComplete="none"
                type="password"
              />

              <FormHelperText error={!!errors.password?.message}>
                {errors.password?.message}
              </FormHelperText>
            </FormControl>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
