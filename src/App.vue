<template>
    <div class="container">
      
      <h2>Routing HW</h2>
      <hr>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <strong><label class="nav-link">Router Links</label></strong> 
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/home">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/ukraine'">Ukraine</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="'/other'">Other</router-link>
            </li>
          </ul>
        </div>
      </nav>
     
     <router-view></router-view>
    
    </div>
</template>

<script>
  export default {}
</script>
