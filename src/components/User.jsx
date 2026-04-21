


export default function User ({user}) {
const createdDate = new Date(user.created_at)

    return (<>
        <img src={user.avatar_url} alt="Profile" />
        <h3>{user.name || user.login}</h3>
       <h4> User joined on {createdDate.getFullYear()}</h4>
       <div>{user.public_repos}

{user.followers}

{user.following}</div>
        </>
    )
}