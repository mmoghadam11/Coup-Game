// frontend/src/App.jsx
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, CircularProgress, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// // نحوه عملکرد
// export { }; // This makes the file a module, preventing global scope pollution issues.
// declare global {
//   interface Window {
//     Telegram: { // Replace 'any' with a more specific type if known
//       WebApp: any; // Example: if 'Telegram' has a 'WebApp' property
//       // Add other properties of the 'Telegram' object as needed
//     };
//   }
// }

// آبجکت تلگرام را به صورت امن دریافت می‌کنیم
// @ts-ignore
// const tg = window.Telegram.WebApp;

// ساخت یک تم دارک برای هماهنگی با تلگرام
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#58A6FF',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
});

function App() {
  const [user, setUser] = useState<any>(null);

  // useEffect(() => {
  //   tg.ready(); // به تلگرام اعلام می‌کنیم که وب‌اپ آماده است
  //   tg.expand(); // وب‌اپ را تمام صفحه می‌کنیم

  //   if (tg.initDataUnsafe?.user) {
  //     setUser(tg.initDataUnsafe.user);
  //   }
  // }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ p: 2, textAlign: 'center', height: '100vh',width:"100vw ", display: 'flex', flexDirection: 'column', justifyContent: 'center',margin:'auto' }}>
        {user ? (
          <>
            <Typography variant="h4">سلام، {user.first_name}!</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              به بازی کودتا خوش آمدی.
            </Typography>
            {/* اینجا کامپوننت‌های اصلی بازی قرار می‌گیرند */}
          </>
        ) : (
          <Box>
            <Typography variant="h4">لطفا تلگرام را باز کنید</Typography>
            <CircularProgress />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;