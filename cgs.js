new Vue(
{
    el: '#app',
    data: 
    {
        cgs_data: "",
        stores: ["search_result.mvideo", "search_result.dns", "search_result.eldorado"],
        load_icon: false
    },
    methods: 
    {
        fetch: function (game_name) 
        {
            this.load_icon = true;
            //fetch('http://194.58.103.53/?game_name=diablo'+game_name)
            fetch('http://localhost:9001/?game_name='+game_name)
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
                console.log(json.data);
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
