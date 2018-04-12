function show_result (input)
{
    // var game_card_template = $('#template').html(); //game_card template

    // $(container).append("<div class='store_name'>"+store+"</div><br>");
    // $(container).append("<div class='store_city'>"+city+"</div><br>");
    // result.forEach(function(item, i, arr) 
    // {
    //     template = game_card_template.replace(/{[^{}]+}/g, function(key)
    //     {
    //         return item[key.replace(/[{}]+/g, "")] || "";
    //     });
    //     $(container).append(template);
    // });
    // 
    var out = "";
    var render = "";
    input = JSON.parse(JSON.stringify(imput.data));
    input.forEach(function(item, i, arr) 
    {
        if (typeof item.mvideo.result !== "undefined") 
        {
        render += '<thead><th colspan="2">mvideo</th></thead>';
        item.mvideo.result.forEach(function(item2, i2, arr2) 
        {
             render += '<tr><th>'+item2.game_name+'</th><th>'+item2.game_price+'</th></tr>';
        });
    }
       
        
        // {
           // out += JSON.stringify(item.mvideo);
            //out += JSON.stringify(item.dns);
           // out += JSON.stringify(item.dns);
        //}
        //template = game_card_template.replace(/{[^{}]+}/g, function(key)
        //{
            //return item[key.replace(/[{}]+/g, "")] || "";
        //});
        //$(container).append(template);
    });

    console.log(render);
    return render;
}

new Vue(
{
    el: '#app',
    data: 
    {
        cgs_data: "",
        load_icon: false
    },
    methods: 
    {
        fetch: function (game_name) 
        {
            this.load_icon = true;
            fetch('http://194.58.103.53/?game_name=diablo'+game_name)
            .then((response) => 
            {
                this.load_icon = false;
                if(response.ok) 
                {
                    return response.json();
                }
                throw new Error('Network response was not ok');
            })
            .then((json) => 
            {
                this.cgs_data = json.data
            })
            .catch((error) => 
            {
                console.log(error);
            });
        }
    },
    created() 
    {

    }
});
