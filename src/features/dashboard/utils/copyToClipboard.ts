export default function copyToClipboard(text:string) {
    let res
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        res = {success:true,message:'Copied to clipboard'};
      }).catch(err => {
        console.log(err)
        res = {success:false,message:'Unable to Copy'}
       
      });
    // } else {
    //   // Fallback for older browsers
    //   const textarea = document.createElement('textarea');
    //   textarea.value = text;
    //   textarea.style.position = 'fixed'; // Avoid scrolling to bottom
    //   document.body.appendChild(textarea);
    //   textarea.focus();
    //   textarea.select();
    //   try {
    //     document.execCommand('copy');
    //     res =({success:true,message:'Copied to Clipboard'})
    //   } catch (err) {
    //     res =({success:false,message:'Unable to Copy'})
    //   }
    //   document.body.removeChild(textarea);
    }
    return res
  }
  