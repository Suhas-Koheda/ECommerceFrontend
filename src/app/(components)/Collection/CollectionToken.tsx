export default function CollectionToken(props: { imageLink: string, heading: string, desc:string }) {
    return (<div className="flex flex-col py-4 md:py-0">
        <div className=" w-full md:w-cvw h-cvh rounded-2xl bg-cover bg-center"
             style={{backgroundImage: `url(${props.imageLink})`}}>
        </div>
        <p className="py-4">{props.heading}</p>
        <p className="py-0">{props.desc}</p>
    </div>);
}
