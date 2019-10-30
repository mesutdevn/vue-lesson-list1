Vue.component('VueVenue', {
    props: {
        item: {
            type: Object,
            required: true,
            default: () => {return null}
        }
    },
    template: ' <div class="venues-wrapper">                <div class="image">                 <iframe :src="\'https://www.google.com/maps/embed/v1/place?key=AIzaSyCta09-T6RWHUUFv2ZlM5Hj9zd-BsVeEdA&q=\' + item.location.lat +\',\' + item.location.lng + \'&zoom=11&maptype=roadmap\'" width="400" height="300" frameborder="0" style="border:0;"></iframe>                </div>                <div class="info">                    <h4>{{item.name}}</h4>                    <p class="seller">{{item.location.address}}</p>                    <p class="shipping">{{item.location.city}} {{item.location.country}}</p>                    <p class="status">Venue ID: {{item.id}}</p>       <vue-venue-images :venueid="item.id"></vue-venue-images>                                                         </div>             </div>'
});

Vue.component('VueVenueImages', {
    props: {
        venueid: { type: String, required: true }
    },
    data: function() {
        return {
            images: []
        };
    },
    created(){
        let url = 'https://api.foursquare.com/v2/venues/' + this.venueid +  '/photos?client_id=CAIMNVEIX3SY4SRGKLEO4B4M2DUN5OBZRXLAIOLOW0DW203T&client_secret=BWEE11CMR4ZZUWXAS5ILMNRHUS3FKDMMJLCOG3GLZ1YYDICK&v=20191030';
        fetch(url)
            .then((res) => {return res.json()} )
            .then((res) => { 
               if(res.meta.code==200)
                 this.images = res.response.photos.items;
            })
    },
    template: '<div class="row"><div v-for="item in images">    <div class="column"> <a v-bind:href="item.prefix + item.width + \'x\'+ item.height + item.suffix" target="_blank"> <img v-bind:src="item.prefix + item.width + \'x\'+ item.height + item.suffix" alt="Snow" style="width:100%">  </a> </div> </div> </div>  '
});

window.vue = new Vue({
    el: '#app',
    name: 'list',
    data: {
      isLoading: true,
      venues: []
    }, 
    created(){
        fetch('https://api.foursquare.com/v2/venues/search?ll=41.108222, 29.033622&client_id=CAIMNVEIX3SY4SRGKLEO4B4M2DUN5OBZRXLAIOLOW0DW203T&client_secret=BWEE11CMR4ZZUWXAS5ILMNRHUS3FKDMMJLCOG3GLZ1YYDICK&v=20191030&locale=tr&radius=500&categoryId=4d4b7105d754a06374d81259&limit=10')
            .then((res) => { return res.json(); })
            .then((res) => { 
                this.isLoading = false;
                this.venues = res.response.venues;
            });
    }
  });