const { tbl_publication } = require('../../db')


const publicationUpdateController = ({ id, title, image, description, tblUserId })=>{
  
  const response =  tbl_publication.update({ image:image, title:title, description:description, tblUserId: tblUserId}, {
    where: {
      id: id
    }
  });
  
  return response
}

module.exports = publicationUpdateController