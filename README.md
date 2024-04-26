## Before creating a Pullrequest

First, merge your branch with main and test

git checkout main

git pull

git checkout your-branch-name

git merge main

now you will see any potential conflicts that will need to be resolved.

## Getting Started

npm install - Install all dependencies
npm run dev - Run development environment

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API Documentation

GET /api/users/logout

Example response:

CODE: 200 OK

{
"message": "Logout successful",
"success": true
}

---

POST /api/users/login

If credentials are verified

Create Token

    const tokenData = {
      id: user._id,
      email: user.email,
      name: user.name,
      last_name: user.last_name,
      phone: user.phone,
    };

---

POST /api/users/signup

If user.email doesn't already exist

Create new user

    const newUser = new User({
        name,
        name_last,
        phone,
        email,
        password: hashedPassword,
    });

---

GET /api/users/check-auth

Example response:

{
"isLoggedIn": true
}
