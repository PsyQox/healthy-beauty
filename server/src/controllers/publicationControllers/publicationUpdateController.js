const { tbl_publication } = require('../../db')


const publicationUpdateController = ({ id, title, images, description, tblUserId })=>{
  
  const response =  tbl_publication.update({ images:images, title:title, description:description, tblUserId: tblUserId}, {
    where: {
      id: id
    }
  });
  
  return response
}

module.exports = publicationUpdateController