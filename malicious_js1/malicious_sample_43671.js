/* <!-- <[CDATA[ */

var introArray = new Array(
"Have you read ^?",
"Check out ^?",
"Check out a post from the archives: ^",
"I picked out an old post just for you: ^",
"Would you like to read ^?",
"A previous post: ^?",
"You might enjoy reading ^.",
"Check out this post from the past ^."
)

function random_number(range)
{
return (Math.round(Math.random()*200000)%range);
}

function random_post(json)
{
var number_of_posts = json.feed.entry.length;
var random_range = number_of_posts;
var selected_post_number = random_number(random_range);
var post_title = json.feed.entry[selected_post_number].title.$t;
var post_link = ""

for (var k = 0; k < json.feed.entry[selected_post_number].link.length; k++)
{
if (json.feed.entry[selected_post_number].link[k].rel == 'alternate')
{
post_link = json.feed.entry[selected_post_number].link[k].href;
break;
}
}

var saved_link_html = "<a href='"+post_link+"'>"+post_title+"</a>";

var output_string = introArray[random_number(introArray.length)];

output_string = output_string.replace("^",saved_link_html);
document.getElementById("output_div").innerHTML=output_string;


}

/* ]]> --> */