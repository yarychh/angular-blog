export interface User{
    name: string,
    email: string,
    password: string,
    id: number
}
export interface Post{
    title: string,
    date?: Date,
    text: string,
    id: number,
    author: string
}

