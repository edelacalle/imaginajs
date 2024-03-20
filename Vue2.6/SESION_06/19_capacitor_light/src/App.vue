<template>
  <div>
    <h1>Geolocalizacion</h1>
    <p>Latitud: {{ loc.latitude }}</p>
    <p>Longitud: {{ loc.longitude }}</p>
    

    <button @click="getCurrentPosition">
      Dame mi posicion
    </button>
    <button @click="takePicture()">Una Foto </button>

    <hr>
    <p>{{img}} </p>
  </div>
</template>
  
  <script>
    // import { defineComponent, ref } from 'vue';
    import { defineCustomElements } from '@ionic/pwa-elements/loader';

    import { Geolocation } from '@capacitor/geolocation';
    import { Camera , CameraResultType} from '@capacitor/camera';
    export default {
      name: 'App',

      components: {
      //  ListCoins
      },

      data: () => ({
        loc:{},
        img:""
      }),
      created(){
        defineCustomElements(window);
      },
      async mounted(){
        
      },

      methods:{

          async getCurrentPosition(){
            let res = await Geolocation.getCurrentPosition();
            this.loc = res.coords;
            console.log("res", res)
            
          },

          async  takePicture()  {
            const image = await Camera.getPhoto({ quality: 90, allowEditing: true, resultType: CameraResultType.Uri
          
          });

          // image.webPath will contain a path that can be set as an image src.
          // You can access the original file using image.path, which can be
          // passed to the Filesystem API to read the raw data of the image,
          // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
          var imageUrl = image.webPath;
          this.img = imageUrl;
          console.log("imagen", image )

          // Can be set to the src of an image now
          //imageElement.src = imageUrl;
          
        }
      }


    };
</script>
