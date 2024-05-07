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

---

GET /api/movies/movie-page?genre=Children

Example response

    {
        _id: new ObjectId('6628dae6242938919cf11bfa'),
        id: 10,
        title: 'Aladdin',
        genre: 'Children',
        image: 'https://m.media-amazon.com/images/M/MV5BZTg5ZTVmM2EtZjdhZC00MzBjLWEwZTYtNWIwZDczYzZkMzA4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg',
        date: '2024-04-29',
        'ticket-price': 100,
        reviews: '[\n' +
        '{id: 1, rating 5, comment: "Bra film, mina barn älskar den"},\n' +
        '{id: 2, rating 4, comment: "Ok film, lite för lång"},\n' +
        '{id: 3, rating 1, comment: "Not so good, made my son scared of toys"}\n' +
        ' ]',
        premierDate: '2024-01-20',
        rating: '3'
    }
