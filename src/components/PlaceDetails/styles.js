import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  chip: {
    margin: '5px 5px 5px 0',
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', backgroundColor: alpha(theme.palette.action.disabled, 1),
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
}));