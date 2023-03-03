import { allImages } from "./Photos.jsx";
export default function AddPhoto() {
    return (
        <>
            <h1 className="title">Завантажити фото</h1>
            <form className="add-photo" onSubmit={addPhotoSubmit}>
                <label htmlFor="photo">Фото</label>
                <input type="file" id="photo" accept="image/png" required />
                <label htmlFor="username">Ім'я користувача (необов'язково)</label>
                <input type="text" id="username" />
                <label htmlFor="password">Пароль (необов'язково)</label>
                <input type="password" id="password" />
                <label htmlFor="email">Електронна пошта (необов'язково)</label>
                <input type="email" id="email" />
                <label htmlFor="description">Опис (необов'язково)</label>
                <textarea id="description" />
                <input type="submit" />
            </form>
        </>
    );
}

function addPhotoSubmit(event) {
    event.preventDefault();
    let photo = event.target.photo.files[0];
    let url = URL.createObjectURL(photo);
    const username = event.target.username.value;
    const email = event.target.email.value;
    let description;
    if (username === "" && email !== "") {
        description = email + ": ";
    }
    else if (username !== "" && email === "") {
        description = username + ": ";
    }
    else {
        description = username + " (" + email + "): ";
    }
    description += event.target.description.value;
    allImages.push({ url: url, description: description, id: allImages.length });
    event.target.reset();
}