<template>
  <div class="product">
    <h2>{{ prod.title }}</h2>
    <p>{{ prod.description }}</p>
    <img :src="prod.image" alt="" />
  </div>
</template>

<script>
export default{
    props:{
        prod:Object
    }
}
</script>

<style scoped>
.product{
    max-width: 300px;
    position: relative;
    overflow: hidden;

}
.product:hover p,
.product:hover h2 {
  opacity: 1;
  cursor: pointer;
}

p, h2 {
    opacity: 0; /* Set the default opacity to 0 */
    transition: opacity 0.3s;
    color: white;
  }

p {
    position: absolute;
    bottom: 20px;
    padding: 30px 10px;
    overflow: hidden;        /* Hide any overflow text */
    white-space: wrap;     /* Prevents text from wrapping to a new line */
    text-overflow: ellipsis; /* Adds '...' at the end of the text */
    height: 300px;
 
    
    transition:  opacity 0.3s;
}
h2{
    display: block;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5); /* Backdrop for better contrast */
    color: white;
    font-size: 24px;
    padding: 30px 10px;
    width: 300px;
    height: 100%;
    backdrop-filter: blur(2px);

}
img{
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 20px;
}
</style>
