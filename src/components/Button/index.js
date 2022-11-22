export default function Button({className, text, createQs}) {

    return (
       <button className={className} onSubmit={createQs} >{text} </button>
    )
}