import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    margin:'0px 10px',
    font:'10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    alignItems: 'left',
  },
  image: {
    marginLeft: '15px',
  },
}));
