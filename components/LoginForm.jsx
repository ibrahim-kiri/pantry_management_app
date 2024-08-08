// "use client";

// import { useState } from "react";
// import { Container, Link, Paper, Typography } from "@mui/material";
// import { useAuth } from "../context/AuthProvider";
// import { useRouter } from "next/navigation";

// const LoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const { login } = useAuth();
//     const router = useRouter();

//     const handleLogin = async () => {
//         e.preventDefault();
//         try {
//             await login(email, password);
//             router.push("/");
//         } catch (error) {
//             console.error("Error logging in:", error);
//         }
//     };

//     return (
//         <Container maxWidth="sm">
//             <Paper elevation={3} style={{ padding: "2em", marginTop: "2em"}}>
//                 <TextField 
//                     variant="outlined"
//                     type="email"
//                     fullWidth
//                     label="Email"
//                     margin="normal"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <TextField 
//                     label="Password"
//                     variant="outlined"
//                     type="password"
//                     fullWidth
//                     margin="normal"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <Button
//                     onClick={handleLogin}
//                     variant="contained"
//                     color="primary"
//                     style={{ marginTop: "1em" }}
//                 >
//                     Login
//                 </Button>
//             </Paper>
            
//         </Container>
//     );
// };

// export default LoginForm;