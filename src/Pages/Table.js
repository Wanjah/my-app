import React from "react";

export default function Table(){
    return(
        <div>
        <h1>This is the tables page</h1>
        <h2><u>Presentation table</u></h2>
        <table role="Presentation">
        <tr>
            <td><img src="./blueRose.jpg" alt="Blue rose flower" height="100px" width="100px"/> </td>
            <td><img src="./redRose.jpg" alt="Red rose flower" height="100px" width="100px"/> </td>
            <td><img src="./whiteRose.jpg" alt="Whtie rose flower" height="100px" width="100px"/>   </td>
        </tr>
        <tr>
            <td><img src="./blueRose.jpg" alt="Blue rose flower" height="100px" width="100px"/> </td>
            <td><img src="./redRose.jpg" alt="Red rose flower" height="100px" width="100px"/> </td>
            <td><img src="./whiteRose.jpg" alt="Whtie rose flower" height="100px" width="100px"/>   </td>
        </tr>
        <tr>
            <td><img src="./blueRose.jpg" alt="Blue rose flower" height="100px" width="100px"/> </td>
            <td><img src="./redRose.jpg" alt="Red rose flower" height="100px" width="100px"/> </td>
            <td><img src="./whiteRose.jpg" alt="Whtie rose flower" height="100px" width="100px"/>   </td>
        </tr>
        </table>

        <h2><u>Simple Table</u></h2>
        <table>
            <caption>JANUARY</caption>
            <thead>
            <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thur</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>

            </tr>
            <tr>
                <td>8</td>
                <td>9</td>
                <td>10</td>
                <td>11</td>
                <td>12</td>
                <td>13</td>
                <td>14</td>

            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>

            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>

            </tr>
            </tbody>
        </table> 
        <br/>
        <h2><u>Compound Table</u></h2>
        <table>
            <caption>Meal timetable</caption>
            <thead>
                <tr>
            <th aria-hidden="true">&nbsp;</th>
            <th scope="col">Mon</th>
            <th scope="col">Tue</th>
            <th scope="col">Wed</th>
            <th scope="col">Thur</th>
            <th scope="col">Fri</th>
            <th scope="col">Sat</th>
            <th scope="col">Sun</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Breakfast</th>
                    <td>Bacon</td>
                    <td>Eggs</td>
                    <td>Coffee</td>
                    <td>Ham</td>
                    <td>Milk</td>
                    <td>Bananas</td>
                    <td>Cakes</td>
                </tr>
                <tr>
                    <th scope="row">Lunch</th>
                    <td>Bacon</td>
                    <td>Eggs</td>
                    <td>Coffee</td>
                    <td>Ham</td>
                    <td>Milk</td>
                    <td>Bananas</td>
                    <td>Cakes</td>
                </tr>
                <tr>
                    <th scope="row">Supper</th>
                    <td>Bacon</td>
                    <td>Eggs</td>
                    <td>Coffee</td>
                    <td>Ham</td>
                    <td>Milk</td>
                    <td>Bananas</td>
                    <td>Cakes</td>
                </tr>

            </tbody>
        </table>
        </div>
    );
}