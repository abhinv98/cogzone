import { useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const UserProfile = () => {
  const [user, setUser] = useState({
    avatar: "/path-to-user-avatar.jpg",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+123456789",
    bio: "A brief bio about John Doe...",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setUser(formData);
    }
  };

  

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-full mx-auto">
      <div className="relative bg-gray-200 dark:bg-gray-700 h-40 rounded-t-lg">
        <img
          src={user.avatar}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto absolute -bottom-16 left-1/2 transform -translate-x-1/2 border-4 border-white dark:border-gray-800"
        />
      </div>
      <div className="text-center mt-20">
        {isEditing ? (
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-4 px-3 py-2 border rounded-lg"
          />
        ) : (
          <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {user.name}
          </h2>
        )}
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
          {user.status} Member
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label
            className="block font-semibold text-gray-900 dark:text-gray-100 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          {isEditing ? (
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        <div>
          <label
            className="block font-semibold text-gray-900 dark:text-gray-100 mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          {isEditing ? (
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>
        <div>
          <label
            className="block font-semibold text-gray-900 dark:text-gray-100 mb-2"
            htmlFor="bio"
          >
            Bio
          </label>
          {isEditing ? (
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          ) : (
            <p>{user.bio}</p>
          )}
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <a
          href={user.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="text-2xl text-blue-600 hover:text-blue-800 transition duration-300" />
        </a>
        <a href={user.social.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600 transition duration-300" />
        </a>
        <a
          href={user.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl text-blue-700 hover:text-blue-900 transition duration-300" />
        </a>
        <a
          href={user.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700 transition duration-300" />
        </a>
      </div>
      <button
        onClick={handleEditToggle}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-6 hover:bg-blue-600 transition duration-300"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default UserProfile;
