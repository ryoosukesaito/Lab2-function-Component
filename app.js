const socialIcons = [
    {
        icon: "fa fa-instagram",
        title: "Instagram"
    },
    {
        icon: "fa fa-facebook-f",
        title: "Facebook"
    },
    {
        icon: "fa fa-twitter",
        title: "Twitter"
    },
    {
        icon: "fa fa-linkedin",
        title: "LinkedIn"
    },
    {
        icon: "fa fa-youtube",
        title: "YouTube"
    },
    {
        icon: "fa fa-github",
        title: "Github"
    }
];

function CardComponent({icon,title}) {
return (
    <div className="button">
    <div className="icon">
    <i className= {icon}></i>
    </div>
    <span>{title}</span>
</div>
);
}

const root = (
    <div className="wrapper">
        <CardComponent icon={socialIcons[0].icon} title={socialIcons[0].title}/>
        <CardComponent icon={socialIcons[1].icon} title={socialIcons[1].title}/>
        <CardComponent icon={socialIcons[2].icon} title={socialIcons[2].title}/>
        <CardComponent icon={socialIcons[3].icon} title={socialIcons[3].title}/>
        <CardComponent icon={socialIcons[4].icon} title={socialIcons[4].title}/>
        <CardComponent icon={socialIcons[5].icon} title={socialIcons[5].title}/>
    </div>
)


ReactDOM.render(root, document.getElementById('root'))