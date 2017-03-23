import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateToTimeAgo'
})
export class DateToTimeAgoPipe implements PipeTransform {
  transform(dateData: Date | number, args?: any): any {
    let timestamp = +dateData;
    let seconds = Math.floor((+new Date() - timestamp) * 0.001);

    if (seconds < 10){
        return "just now";
    }else if (seconds < 60){
        return seconds + " seconds ago";
    }
    else if (seconds < 3600) {
        let minutes = Math.floor(seconds/60)
        if(minutes > 1)
            return minutes + " minutes ago";
        else
            return "1 minute ago";
    }
    // 1 day
    else if (seconds < 86400) {
        let hours = Math.floor(seconds/3600)
        if(hours > 1)
            return hours + " hours ago";
        else
            return "1 hour ago";
    }
    //31 days
    else if (seconds < 2678400) {
        let days = Math.floor(seconds/86400)
        if(days > 1)
            return days + " days ago";
        else
            return "1 day ago";
    }
    //months
    else if (seconds < 31536000){
        let months = Math.floor(seconds/2678400)
        if(months > 1)
            return months + " months ago";
        else
            return "1 month ago";
    }//year
    else{
        let years = Math.floor(seconds/31536000)
        if(years > 1)
            return years + " years ago";
        else
            return "1 year ago";
    }
  }

}
