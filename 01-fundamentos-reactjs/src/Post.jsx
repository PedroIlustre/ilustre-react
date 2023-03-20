export function Post(props)
{
    return (
        <div>
            <p>Hi I'm post from {props.author} </p>
            <p>And this is the content: {props.content} </p>
        </div>
    )
}