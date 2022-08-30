import * as React from 'react';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
// import {TimePicker} from '@mui/x-date-pickers/TimePicker';
// import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker';
// import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
// import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { purple } from '@mui/material/colors';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';







//  const  Clock =  () =>  {
//   const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
//   const handleChange = (newValue) => {
//     setValue(newValue);
//   };
 
//   return (
//     <ThemeProvider theme={theme}>
//       <div style={{margin: "5% 40%"}}>
//         <LocalizationProvider dateAdapter={AdapterDateFns}>
//           <Stack spacing={3}>
//             <DesktopDatePicker
//               label="Date desktop"
//               inputFormat="MM/dd/yyyy"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <MobileDatePicker
//               label="Date mobile"
//               inputFormat="MM/dd/yyyy"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <TimePicker
//               label="Time"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//             <DateTimePicker
//               label="Date&Time picker"
//               value={value}
//               onChange={handleChange}
//               renderInput={(params) => <TextField {...params} />}
//             />
//           </Stack>
//         </LocalizationProvider>
//       </div>
//     </ThemeProvider>
//   );
// }

const Time = () => {
  const [value, setValue] = React.useState("20");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
       
        
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}




export  function NewTimePicker() {
  const [value, setValue] = React.useState("20");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        label="Select Time"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}

export default Time 