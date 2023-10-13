const Model = require('../models');
const users = Model.userModel
const restaurent = Model.restaurentModel
const content = Model.foodgenicContentModel
const transaction = Model.transactionModel
const blog = Model.blogModel


const userService = () => {
  const getUserByemail = async (email) => {
    return users.findOne({ where: { email: email } })
  }
  const createUser = async (userData) => {
    return users.create(userData)
  }
  const addRestaurent = async (restaurentData) => {
    return restaurent.create(restaurentData)
  }
  const getRestaurent = async () => {
    return restaurent.findAll()
  }
  const getRestaurentISVerified = async () => {
    return restaurent.findAll({ where: { isVerified: true } })
  }
  const updateRestaurent = async (userId, restaurentData) => {
    return restaurent.update(restaurentData, { where: { id: userId } });
  }
  const verifiedRestaurent = async (userId, restaurentData) => {
    return restaurent.update(restaurentData, { where: { id: userId }});
  }
  const getRestaurentById= async (userId) => {
    return restaurent.findAll({ where: { id: userId } })
  }
  const deleteRestaurent = async (restaurentId) => {
    return restaurent.destroy({ where: { id: restaurentId } });
  }
  const deleteRestaurentUser = async (email) => {
    return users.destroy({ where: { email: email } });
  }
  const getUserByemailRestaurent = async (email) => {
    return restaurent.findOne({ where: { email: email } })
  }
  const findRestaurent = async (restaurentId) => {
    return restaurent.findOne({ where: { id: restaurentId } });
  }
  const createContent = async (contentData) => {
    return content.update(contentData, { where: { id: 1 } });
  }
const getContentData = async () => {
    return content.findOne( { where: { id: 1 } })
  }
  const createtransactions = async (userData) => {
    return transaction.create(userData)
  }
  const AddBlog = async (blogData) => {
    return blog.create(blogData)
  }
  const updateBlog = async (blogId, blogData) => {
    return blog.update(blogData, { where: { id: blogId } });
  }
  const getBlog = async () => {
    return blog.findAll()
  }
  const findByIdBlog = async (blogId) => {
    return blog.findAll({ where: { id: blogId } });
  }
  const deleteBlog = async (blogId) => {
    return blog.destroy({ where: { id: blogId } });
  }
  
  return {
    getUserByemail,
    createUser,
    addRestaurent,
    updateRestaurent,
    deleteRestaurent,
    findRestaurent,
    getRestaurent,
    getUserByemailRestaurent,
    deleteRestaurentUser,
    getRestaurentISVerified,
    verifiedRestaurent,
    createContent,
    getContentData,
    getRestaurentById,
    createtransactions,
    AddBlog,
    updateBlog,
    getBlog,
    findByIdBlog,
    deleteBlog
  };
};
module.exports = userService;
