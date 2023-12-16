const User = {
    firstName: "Olaitan",
    lastName: "Fatomi",
    title: "Software Engineer",
    img: "../assets/Olaitan.png",
    list: [
        {
            id: "1",
            title: "Call doctor for tests",
            date: "02 feb 2023",
            time: "9:30 am",
            description: "Ask for blood test and GYM certificate"
        },
        {
            id: "2",
            title: "Call doctor for tests",
            date: "25 feb 2023",
            time: "9:30 am",
            description: "Ask for blood test and GYM certificate"
        },
        {
            id: "3",
            title: "Call doctor for tests",
            date: "25 feb 2023",
            time: "9:30 am",
            description: "Ask for blood test and GYM certificate"
        }

    ]

}

export default User;


export const lists = JSON.parse(localStorage.getItem("item"));