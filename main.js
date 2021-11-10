const linkSocialMedia={
    github:'Breslei',
    youtube:'max',
    instagram:'bresleimax',
    facebook:'bresleimax',
    twitter:'breslei'
   }


   function changeSocialMedia(){
       for(let li of socialLinks.children){
            const social=li.getAttribute('class')
            li.children[0].href=`https://${social}.com/${linkSocialMedia[social]}`
       }

   }

   function getGitHubProfileInfos(){
       const url = `https://api.github.com/users/${linkSocialMedia.github}`
       
       fetch(url)
       .then( response => response.json())
       .then( data =>{
           userName.textContent = data.name
           userBio.textContent = data.bio 
           userLink.href = data.html_url
           userLogin.textContent = data.login
           userImage.src = data.avatar_url
       })
       //.then( )
   }


   getGitHubProfileInfos()