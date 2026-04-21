


export default function User ({user}) {
const createdDate = new Date(user.created_at)

    return (<>
        <img src={user.avatar_url} alt="Profile" />
        <h3>{user.name || user.login}</h3>
       <div>{user.public_repos}

{user.followers}

{user.following}</div>
        </>
    )
}