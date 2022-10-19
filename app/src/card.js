import './card.css'
import Save_Label from './save_button';
import Hash_Label from './hash_label';
import Like_Button from './like_button';
import Comment_Button from './comment_button';
// import Button_Unlike from './button_unlike';
export default function Card (props){


    //avatars
    var sprite = "male";
    var seed = Math.random();
    const tags = props.tags.map((x)=>(<Hash_Label hash={x}/>))
    var source = "https://avatars.dicebear.com/api/"+sprite+"/"+seed+".svg";

    //
    return(
        <div className="card">
            
            <div id='top'>
                <div id='img'>
                    <img src={source}></img>
                </div>
                <div id='holder'>
                    <h4>{props.username}</h4>
                    <p id='date'>{props.date}</p>
                </div>
            </div>

            <div id='content'>
                <h1>{props.title}</h1>
                <div>{tags}</div>
            </div>

            <div id='bottom'>
                <div>
                    <Like_Button id={props.id} display={props.likes}
                        icon = {<i className="fa-regular fa-heart fa-xl"></i>}
                    />
                </div>
                    <div><Comment_Button id={props.id} display={props.comments} 
                    icon = {<i className="fa-regular fa-comment fa-xl"></i>}
                    />
                </div>
                <div><Save_Label id={props.id} 
                    icon = {<i className="fa-regular fa-bookmark fa-xl"></i>}
                /></div>
            </div>
        
        </div>
    );
}