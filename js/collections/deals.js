Deals = Backbone.Collection.extend({

    model:Client,
    
    url:"https://api.pipedrive.com/v1/deals?start=0&api_token=829c065a8f5678a9621c55db7179cf5a9914830c",

   parse : function(response){
        console.log('C', response.data);
        return response.data;
    }

});

