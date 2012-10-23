(function(){
    tinymce.PluginManager.requireLangPack("polls");
    tinymce.create("tinymce.plugins.PollsPlugin",{
        init:function(a,b){
            a.addCommand("mcePollInsert",function(){
//                a.execCommand("mceInsertContent",0,insertPoll("visual",""))
            });
            a.addButton("polls",{
                title:"",
                cmd:"mcePollInsert",
                image:b+"/img/favicon-5.jpeg"
            });
            a.onNodeChange.add(function(d,c,e){
                c.setActive("polls",e.nodeName=="IMG")
            })
        }//,
//        createControl:function(b,a){
//            return null
//        },
//        getInfo:function(){
//            return{
//                longname:"WP-Polls",
//                author:"Lester Chan",
//                authorurl:"http://lesterchan.net",
//                infourl:"http://lesterchan.net/portfolio/programming/php/",
//                version:"2.62"
//            }
//        }
    });
    tinymce.PluginManager.add("polls",tinymce.plugins.PollsPlugin)
})();