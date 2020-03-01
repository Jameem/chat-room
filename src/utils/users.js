const users = []

const addUser = ({
    id,
    username,
    room
}) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //Validate the data
    if (!username || !room) {
        return {
            error: 'Username and room are required!'
        }
    }

    //check existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    //validate Username
    if (existingUser) {
        return {
            error: "Username in use!"
        }
    }

    //Store user
    const user = {
        id,
        username,
        room
    }

    users.push(user)
    return
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)

    if (index !== -1) {
        return users.splice(index, 1)
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}