public async Task  
<ActionResult> email(FormCollection form)   
{   
var name = form["sname"];   
var email = form["semail"];   
var messages = form["smessage"];   
var phone = form["sphone"];   
var x = await SendEmail(name,email,messages,phone);   
if (x == "sent")   
ViewData["esent"]= "Your Message Has Been Sent";   
return RedirectToAction("Index");   
}   
private async Task  
    <string> SendEmail(string name, string email, string messages, string phone)   
{   
var message = new MailMessage();   
message.To.Add(new MailAddress("abc@xyz.com")); 
message.From = new MailAddress("xyz@abc.com");  
message.Subject = "Message From" + email;   
message.Body = "Name: " + name + "\nFrom: " + email + "\nPhone: " + phone + "\n" + messages;   
message.IsBodyHtml = true;   
using (var smtp = new SmtpClient())   
{   
var credential = new NetworkCredential   
{   
UserName = "xyz@abc.com",  
Password = "*****" 
};   
smtp.Credentials = credential;   
smtp.Host = "smtp-mail.outlook.com";   
smtp.Port = 587;   
smtp.EnableSsl = true;   
await smtp.SendMailAsync(message);   
return "sent";   
}   
}  


