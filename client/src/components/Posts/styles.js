// import { makeStyles } from '@mui/styles';

// export default makeStyles((theme) => ({
//   mainContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     marginTop:'120px',
//   },
//   smMargin: {
//     margin: theme.spacing(1),
//   },
//   actionDiv: {
//     textAlign: 'center',
//   },
// }));




import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '140px',  // ✅ Adjusted space below navbar
  },
  smMargin: {
    margin: '10px',
  },
  actionDiv: {
    textAlign: 'center',
  },
}));

