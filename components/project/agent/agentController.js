save.controller('AgentCtrl', ['$scope', '$http','$location', function($scope,$http,$location){
            /*agent-hide-and-show*/

            /*isolated agent view*/
            $("#agent-details").click(function(event){
               event.preventDefault();
                $(".agent-view").hide();
                $(".isolated-agent-view").show();

            });

            /*back to agent view table*/
            $(".back-to-agent-view").click(function(event){
               event.preventDefault();
                $(".isolated-agent-view").hide();
                $(".agent-view").show();
            });

            /*back to isolated agent view*/
            $(".back-to-agent-detail").click(function(event){
               event.preventDefault();
                $("#add-new-agent").hide();
                $("#isolated-agent-view").show();
            });
            /*floating button add new agent*/
            $(".btn-add-new-agent").click(function(event){
               event.preventDefault();
                $("#isolated-agent-view,.agent-view").hide();
                $("#add-new-agent").show();

            });

}])
