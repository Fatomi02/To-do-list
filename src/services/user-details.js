const User = {
    firstName: "Olaitan",
    lastName: "Fatomi",
    title: "Software Engineer",
    img: "../assets/Olaitan.png",
    list: [
        {
            id: "0",
            title: "Call doctor for tests",
            date: "2023-12-14",
            time: "9:30 am",
            description: "Ask for blood test and GYM certificate",
            isEditing: false,
            status: "todo",
            btn: false
        },
        {
            id: "1",
            title: "Call doctor for tests",
            date: "2023-12-14",
            time: "9:30 am",
            description: "Ask for blood test and GYM certificate",
            isEditing: false,
            status: "todo",
            btn: false
        },
        {
            id: "2",
            title: "Call doctor for tests",
            date: "2023-12-14",
            time: "9:30 am",
            description: "Ask for blood test and GYM certificate",
            isEditing: false,
            status: "todo",
            btn: false
        }

    ]
}

export default User;


export const lists = JSON.parse(localStorage.getItem("item"));