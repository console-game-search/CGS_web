function show_result (result)
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
    //result = JSON.parse(JSON.stringify(result.data));
    result.forEach(function(item, i, arr) 
    {
        if (typeof item !== "undefined") 
        {
            out += JSON.stringify(item.mvideo);
        }
        //template = game_card_template.replace(/{[^{}]+}/g, function(key)
        //{
            //return item[key.replace(/[{}]+/g, "")] || "";
        //});
        //$(container).append(template);
    });
    return out;
}

new Vue(
{
    el: '#app',
    data: 
    {
        cgs_data: [],
        load_icon: false
    },
    methods: 
    {
        fetch: function (game_name) 
        {
            this.load_icon = true;
            fetch('http://94.180.83.232/?game_name='+game_name)
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
                this.cgs_data.push({
                    //games_list: JSON.stringify(json.data);
                    games_list: show_result(json.data)
                });
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
