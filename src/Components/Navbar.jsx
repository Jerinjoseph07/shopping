import React from 'react'

const Navbar = () => {
    return (
      <Box>
          <AppBar>
              <Toolbar>
                  <Typography variant='h6' component='div'>shoppingApp</Typography>
                  <Button color="inherit"><Link to='/' style={{color:'white',textDecoration:'none'}}>View</Link></Button>
                  <Button color="inherit"><Link to='/add' style={{color:'white',textDecoration:'none'}}>Add</Link></Button>
                  <Avatar sx={{ bgcolor: blue[500] }}>J</Avatar>
              </Toolbar>
          </AppBar>
      </Box>
    )
  }
  

export default Navbar
