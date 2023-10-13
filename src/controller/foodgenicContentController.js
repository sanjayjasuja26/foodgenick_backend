
const resModel = require("../lib/resModel");
const userService = require("../services/userService.js")
const contentService = require("../services/commonSevices")


/**
* @api {post} /foodgienic/content  Add Content 
* @apiName Add Content
* @apiGroup Content
* @apiParam {string}  home_page_sections  HomePageSections of User `Mendatory`.
* @apiParam {string}  about_page_sections  AboutPageSections of User `Mendatory`.
* @apiParam {string}  price_page_sections  PricePageSections of User `Mendatory`.`.
* @apiParam {string}  service_page_sections ServicePageSections of User `Mendatory`.`.
* @apiParam {string}  blog_page_sections Blog_page_sections of User `Mendatory`.`.
* @apiParam {string}  partners_page_sections Partners_page_sections of User `Mendatory`.`.
* @apiParam {string}  type Type of User `Mendatory`.
* @apiHeader {String} authorization Authorization.
* @apiDescription Content Service..
*/
const addcontent = async (req, res) => {    
    try {
        const dataValue={
            home_page_sections:null,
            about_page_sections:null,
            price_page_sections:null,
            service_page_sections:null,
            blog_page_sections:null,
            partners_page_sections:null
        }
        const { partners_page_sections,home_page_sections, about_page_sections, price_page_sections, service_page_sections, blog_page_sections, type } = req.body;
         const dataInfo = contentService.commonService(type,home_page_sections,about_page_sections,price_page_sections,service_page_sections, blog_page_sections,partners_page_sections)
         const contentCheck = await userService().createContent(dataInfo);
         const data = await userService().getContentData()
         const home = JSON.parse(data.dataValues.home_page_sections);
         const about = JSON.parse(data.dataValues.about_page_sections);
         const price = JSON.parse(data.dataValues.price_page_sections);
         const services = JSON.parse(data.dataValues.service_page_sections);
         const blog = JSON.parse(data.dataValues.blog_page_sections);
         const partner = JSON.parse(data.dataValues.partners_page_sections);
         dataValue.home_page_sections = home
         dataValue.about_page_sections = about
         dataValue.price_page_sections = price
         dataValue.service_page_sections = services
         dataValue.blog_page_sections = blog
         dataValue.partners_page_sections = partner
        if (contentCheck.length >0) {
            resModel.success = true;
            resModel.message = "Content Added Successfully";
            resModel.data = dataValue;
            res.status(200).json(resModel);
        } else {
            resModel.success = false;
            resModel.message = "Content Does'nt Add ";
            resModel.data = null;
            res.status(400).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}


/**
* @api {get} /foodgienic/getcontent  GetAllContent 
* @apiName GetAllContent
* @apiGroup Content
* @apiDescription Content Service..
*/
const getcontent = async (req, res) => {
    try {
        const dataValue={
            home_page_sections:null,
            about_page_sections:null,
            price_page_sections:null,
            service_page_sections:null,
            blog_page_sections:null,
            partners_page_sections:null
        }
         const data = await userService().getContentData()
         const home = JSON.parse(data.dataValues.home_page_sections);
         const about = JSON.parse(data.dataValues.about_page_sections);
         const price = JSON.parse(data.dataValues.price_page_sections);
         const services = JSON.parse(data.dataValues.service_page_sections);
         const blog = JSON.parse(data.dataValues.blog_page_sections);
         const  partners = JSON.parse(data.dataValues.partners_page_sections);
         dataValue.home_page_sections = home
         dataValue.about_page_sections = about
         dataValue.price_page_sections = price
         dataValue.service_page_sections = services
         dataValue.blog_page_sections = blog
         dataValue.partners_page_sections = partners
       if (data.dataValues) {
            resModel.success = true;
            resModel.message = "Get All Content Successfully";
            resModel.data = dataValue;
            res.status(200).json(resModel);
        } else {
            resModel.success = false;
            resModel.message = "Content Not Found ";
            resModel.data = [];
            res.status(200).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}



/**
* @api {post} /foodgienic/blog  Add Blog 
* @apiName Add Blog
* @apiGroup Content
* @apiParam {string}  title  Title `Mendatory`.
* @apiParam {string}  image  Image `Mendatory`.
* @apiParam {string}  description  Description `Mendatory`.`.
* @apiHeader {String} authorization Authorization.
* @apiDescription Content Service..
*/
const AddBlog= async (req, res) => {
    try {
        const { image,description, title } = req.body;
            let blogInfo = {
                title: title,
                image:image,
                description:description
            }
            const blog = await userService().AddBlog(blogInfo);;
            if (blog.dataValues) {
                resModel.success = true;
                resModel.message = "Blog Add Successfully";
                resModel.data = blog.dataValues;
                res.status(201).json(resModel);
            } else {
                resModel.success = false;
                resModel.message = "Error While Add Blog ";
                resModel.data = null;
                res.status(400).json(resModel);
            
    }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}

/**
* @api {post} /foodgienic/updateBlog  update Blog 
* @apiName update Blog
* @apiGroup Content
* @apiParam {string}  id  id `Mendatory`.`.
* @apiParam {string}  title  Title `Mendatory`.
* @apiParam {string}  image  Image `Mendatory`.
* @apiParam {string}  description  Description `Mendatory`.`.
* @apiHeader {String} authorization Authorization.
* @apiDescription Content Service..
*/
const updateBlog = async (req, res) => {
    try {
        const {image,description,title,id } = req.body;
        let blogInfo = {
            title: title,
            image:image,
            description:description
        }
        const blog = await userService().updateBlog(id, blogInfo);
        if (blog.length > 0) {
            resModel.success = true;
            resModel.message = "Blog Updated Successfully";
            resModel.data = null
            res.status(200).json(resModel);
        }else{
            resModel.success = false;
            resModel.message = "Error While Update Blog";
            resModel.data = null
            res.status(400).json(resModel);

        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}
/**
* @api {get} /foodgienic/getAllBlog  GetAllBlog
* @apiName GetAllBlog
* @apiGroup Content
* @apiDescription Content Service..
*/
const getAllBlog = async (req, res) => {
    try {
    
         const data = await userService().getBlog()
       if (data.length > 0) {
            resModel.success = true;
            resModel.message = "Get All Blog Successfully";
            resModel.data = data;
            res.status(200).json(resModel);
        } else {
            resModel.success = true;
            resModel.message = "Blog Not Found";
            resModel.data = [];
            res.status(200).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}
/**
* @api {post} /foodgienic/deleteBlog  Delete Blog
* @apiNameDelete Delete Blog
* @apiParam {string}  BlogId  BlogId `Mendatory`.`.
* @apiHeader {String} authorization Authorization.
* @apiGroup Content
* @apiDescription Content Service..
*/
const deleteBlog = async (req, res) => {
    try {
        const { BlogId } = req.body;
        const findBlog = await userService().findByIdBlog(BlogId);
        if (findBlog) {
            const blogDelete = await userService().deleteBlog(BlogId);
            if (blogDelete === 1) {
                resModel.success = true;
                resModel.message = "Delete Blog Successfully";
                resModel.data = null
                res.status(200).json(resModel);
            } else {
                resModel.success = false;
                resModel.message = "Error While Delete Blog";
                resModel.data = null
                res.status(400).json(resModel);
            }
        } else {
            resModel.success = false;
            resModel.message = "Blog not found.";
            resModel.data = null
            res.status(400).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}

/**
* @api {get} /foodgienic/blogDetails/:id  Blog Details
* @apiNameDelete Blog Details.
* @apiGroup Content
* @apiDescription Content Service..
*/
const getBlogDetails = async (req, res) => {
    try {
         const {id} = req.params
         const data = await userService().findByIdBlog(id)
       if (data.length > 0) {
            resModel.success = true;
            resModel.message = "Get Blog Details Successfully";
            resModel.data = data;
            res.status(200).json(resModel);
        } else {
            resModel.success = true;
            resModel.message = "Blog Does't Exists";
            resModel.data = null;
            res.status(400).json(resModel);
        }
    } catch (error) {
        resModel.success = false;
        resModel.message = "Error occured during execution";
        resModel.data = error;
        res.status(500).json(resModel);
    }
}
module.exports = {
    addcontent,
    getcontent,
    AddBlog,
    updateBlog,
    getAllBlog,
    deleteBlog,
    getBlogDetails
}