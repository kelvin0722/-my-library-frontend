import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import TableBooks from '../src/components/TableBooks';
import NavBar from '../src/components/Navbar';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Collection() {
  const [value, setValue] = React.useState(0);
  const matches = useMediaQuery((theme: any) => theme.breakpoints.down('md'));

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <NavBar />
      <main>
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            px: 4,
            py: 4,
          }}
        >
          <Box mb={2}>
            <Typography variant='h5'>My Books</Typography>
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: matches ? 'column' : 'row' }}
          >
            <Tabs
              orientation={matches ? 'horizontal' : 'vertical'}
              variant='scrollable'
              value={value}
              onChange={handleChange}
              aria-label='Vertical tabs example'
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab label='All (3)' {...a11yProps(0)} />
              <Tab label='Read (4)' {...a11yProps(1)} />
              <Tab label='Currently Reading (4)' {...a11yProps(2)} />
              <Tab label='Want to Read (1)' {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
              <TableBooks />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TableBooks />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TableBooks />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <TableBooks />
            </TabPanel>
          </Box>
        </Box>
      </main>
    </>
  );
}
