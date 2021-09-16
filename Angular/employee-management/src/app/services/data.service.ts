import { Injectable, EventEmitter } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DataService {
    listUpdatedEventEmitter = new EventEmitter()

    public employeeList = [
    {
      "id":"1",
      "createdAt":"2018-12-03T11:37:42.015Z",
      "name":"Ms. Gaylord Streich",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jagan123/128.jpg"
    },
    {
      "id":"2",
      "createdAt":"2018-12-02T21:06:49.825Z",
      "name":"Roxanne Kunde",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg"
    },
    {
      "id":"3",
      "createdAt":"2018-12-03T03:37:39.995Z",
      "name":"Dante Spencer",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/moscoz/128.jpg"
    },
    {
      "id":"4",
      "createdAt":"2018-12-03T11:07:34.261Z",
      "name":"Benny Hartmann",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/abdots/128.jpg"
    },
    {
      "id":"5",
      "createdAt":"2018-12-03T11:38:36.583Z",
      "name":"Easton Fisher",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/brenton_clarke/128.jpg"
    },
    {
      "id":"6",
      "createdAt":"2018-12-02T17:48:52.784Z",
      "name":"Mrs. Brandi Grant",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/g3d/128.jpg"
    },
    {
      "id":"7",
      "createdAt":"2018-12-02T17:57:35.899Z",
      "name":"Leopoldo Ortiz",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/aoimedia/128.jpg"
    },
    {
      "id":"8",
      "createdAt":"2018-12-03T06:31:54.963Z",
      "name":"Marielle Zulauf",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jjshaw14/128.jpg"
    },
    {
      "id":"9",
      "createdAt":"2018-12-03T00:28:30.136Z",
      "name":"Maynard Hilll",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/danro/128.jpg"
    },
    {
      "id":"10",
      "createdAt":"2018-12-03T13:42:04.578Z",
      "name":"Jovanny Dare",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"
    },
    {
      "id":"11",
      "createdAt":"2018-12-02T18:01:47.117Z",
      "name":"Domenick Dach",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/alek_djuric/128.jpg"
    },
    {
      "id":"12",
      "createdAt":"2018-12-03T12:33:52.267Z",
      "name":"Clemmie Bauch",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/dhoot_amit/128.jpg"
    },
    {
      "id":"13",
      "createdAt":"2018-12-03T00:48:01.686Z",
      "name":"Alyson Pagac",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mahmoudmetwally/128.jpg"
    },
    {
      "id":"14",
      "createdAt":"2018-12-03T15:39:21.838Z",
      "name":"Chadrick Berge",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jeremiespoken/128.jpg"
    },
    {
      "id":"15",
      "createdAt":"2018-12-03T00:50:27.049Z",
      "name":"Bethel Stracke",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/uxpiper/128.jpg"
    },
    {
      "id":"16",
      "createdAt":"2018-12-03T14:11:17.286Z",
      "name":"Marlene Price",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/craighenneberry/128.jpg"
    },
    {
      "id":"17",
      "createdAt":"2018-12-03T02:23:52.345Z",
      "name":"Christian Smitham DVM",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg"
    },
    {
      "id":"18",
      "createdAt":"2018-12-02T18:35:28.636Z",
      "name":"Laron Torphy",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg"
    },
    {
      "id":"19",
      "createdAt":"2018-12-02T19:47:23.953Z",
      "name":"Cordelia Jacobs",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg"
    },
    {
      "id":"20",
      "createdAt":"2018-12-03T05:53:28.030Z",
      "name":"Elroy Rippin",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/envex/128.jpg"
    },
    {
      "id":"21",
      "createdAt":"2018-12-03T03:30:15.585Z",
      "name":"Dr. Idell McLaughlin",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/murrayswift/128.jpg"
    },
    {
      "id":"22",
      "createdAt":"2018-12-03T05:56:50.677Z",
      "name":"Ramon Cartwright",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bobwassermann/128.jpg"
    },
    {
      "id":"23",
      "createdAt":"2018-12-03T16:10:53.992Z",
      "name":"Mr. Keyshawn Towne",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/krasnoukhov/128.jpg"
    },
    {
      "id":"24",
      "createdAt":"2018-12-03T16:25:05.049Z",
      "name":"Lyla Turner",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/therealmarvin/128.jpg"
    },
    {
      "id":"25",
      "createdAt":"2018-12-03T03:43:27.222Z",
      "name":"Samir Yundt Jr.",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hoangloi/128.jpg"
    },
    {
      "id":"26",
      "createdAt":"2018-12-03T15:55:25.087Z",
      "name":"Xavier Mueller",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/cofla/128.jpg"
    },
    {
      "id":"27",
      "createdAt":"2018-12-03T06:23:02.619Z",
      "name":"Larue Roob",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/marcobarbosa/128.jpg"
    },
    {
      "id":"28",
      "createdAt":"2018-12-03T11:01:21.931Z",
      "name":"Ansel McClure",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/rohixx/128.jpg"
    },
    {
      "id":"29",
      "createdAt":"2018-12-03T05:47:32.497Z",
      "name":"Zoila Bins II",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/terrorpixel/128.jpg"
    },
    {
      "id":"30",
      "createdAt":"2018-12-03T02:03:59.330Z",
      "name":"Ms. Barney Watsica",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mikebeecham/128.jpg"
    },
    {
      "id":"31",
      "createdAt":"2018-12-02T22:35:35.569Z",
      "name":"Gus Miller I",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/carlyson/128.jpg"
    },
    {
      "id":"32",
      "createdAt":"2018-12-02T17:28:36.648Z",
      "name":"Heidi Baumbach MD",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/themikenagle/128.jpg"
    },
    {
      "id":"33",
      "createdAt":"2018-12-02T18:40:40.627Z",
      "name":"Erin Konopelski",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg"
    },
    {
      "id":"34",
      "createdAt":"2018-12-03T15:00:07.501Z",
      "name":"Donavon Hodkiewicz",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/katiemdaly/128.jpg"
    },
    {
      "id":"35",
      "createdAt":"2018-12-03T16:23:11.309Z",
      "name":"Mrs. Madyson Hamill",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/rodnylobos/128.jpg"
    },
    {
      "id":"36",
      "createdAt":"2018-12-02T18:22:34.307Z",
      "name":"Yvette Barton",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vonachoo/128.jpg"
    },
    {
      "id":"37",
      "createdAt":"2018-12-03T10:10:25.840Z",
      "name":"Sandy Kirlin",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/m_kalibry/128.jpg"
    },
    {
      "id":"38",
      "createdAt":"2018-12-03T14:49:44.110Z",
      "name":"Donato Feest",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/lokesh_coder/128.jpg"
    },
    {
      "id":"39",
      "createdAt":"2018-12-03T03:20:03.266Z",
      "name":"Cheyenne Ritchie",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/charliecwaite/128.jpg"
    },
    {
      "id":"40",
      "createdAt":"2018-12-02T23:03:31.970Z",
      "name":"Keon Harris II",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg"
    },
    {
      "id":"41",
      "createdAt":"2018-12-03T00:27:49.216Z",
      "name":"Janice Schmeler",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/joetruesdell/128.jpg"
    },
    {
      "id":"42",
      "createdAt":"2018-12-03T14:23:04.572Z",
      "name":"Rudolph Kemmer",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/rpatey/128.jpg"
    },
    {
      "id":"43",
      "createdAt":"2018-12-02T20:41:22.751Z",
      "name":"Evelyn Tremblay",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/terrorpixel/128.jpg"
    },
    {
      "id":"44",
      "createdAt":"2018-12-03T09:16:17.273Z",
      "name":"Ryley Von",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/angelcreative/128.jpg"
    },
    {
      "id":"45",
      "createdAt":"2018-12-03T01:38:20.933Z",
      "name":"Kennith Schmidt",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/salimianoff/128.jpg"
    },
    {
      "id":"46",
      "createdAt":"2018-12-03T00:13:20.374Z",
      "name":"Ms. Maude Hessel",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/ManikRathee/128.jpg"
    },
    {
      "id":"47",
      "createdAt":"2018-12-03T11:34:16.647Z",
      "name":"Johnpaul Kuphal V",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/lvovenok/128.jpg"
    },
    {
      "id":"48",
      "createdAt":"2018-12-02T18:35:22.900Z",
      "name":"Mohamed Durgan",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/gaborenton/128.jpg"
    },
    {
      "id":"49",
      "createdAt":"2018-12-03T13:04:55.625Z",
      "name":"Lonny Thompson",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/geobikas/128.jpg"
    },
    {
      "id":"50",
      "createdAt":"2018-12-03T08:46:48.961Z",
      "name":"Liana Connelly",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/oksanafrewer/128.jpg"
    },
    {
      "id":"51",
      "createdAt":"2018-12-03T03:54:57.300Z",
      "name":"Krystina O'Connell",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/akashsharma39/128.jpg"
    },
    {
      "id":"52",
      "createdAt":"2018-12-02T18:22:03.750Z",
      "name":"Elda Ebert",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/timpetricola/128.jpg"
    },
    {
      "id":"53",
      "createdAt":"2018-12-03T14:43:52.306Z",
      "name":"Macy Haley",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/edgarchris99/128.jpg"
    },
    {
      "id":"54",
      "createdAt":"2018-12-03T07:54:16.595Z",
      "name":"Walter Lang PhD",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/nickfratter/128.jpg"
    },
    {
      "id":"55",
      "createdAt":"2018-12-03T03:25:21.342Z",
      "name":"Cleta Lang",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sawalazar/128.jpg"
    },
    {
      "id":"56",
      "createdAt":"2018-12-02T21:28:10.064Z",
      "name":"Buford Smith",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/albertaugustin/128.jpg"
    },
    {
      "id":"57",
      "createdAt":"2018-12-03T15:51:54.877Z",
      "name":"Dr. Keaton Robel",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/rickdt/128.jpg"
    },
    {
      "id":"58",
      "createdAt":"2018-12-03T01:39:29.214Z",
      "name":"Dr. Maximilian Cummings",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/franciscoamk/128.jpg"
    },
    {
      "id":"59",
      "createdAt":"2018-12-03T06:20:32.555Z",
      "name":"Angeline Kreiger",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/timgthomas/128.jpg"
    },
    {
      "id":"60",
      "createdAt":"2018-12-03T14:06:26.760Z",
      "name":"Jakob Ondricka",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
    },
    {
      "id":"61",
      "createdAt":"2018-12-02T17:12:01.943Z",
      "name":"Travis Wiza",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vonachoo/128.jpg"
    },
    {
      "id":"62",
      "createdAt":"2018-12-03T16:27:26.009Z",
      "name":"Anabelle Zulauf V",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/codysanfilippo/128.jpg"
    },
    {
      "id":"63",
      "createdAt":"2018-12-03T02:38:05.589Z",
      "name":"Delphine Raynor",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/batsirai/128.jpg"
    },
    {
      "id":"64",
      "createdAt":"2018-12-03T15:33:35.265Z",
      "name":"Justine Jones DVM",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vaughanmoffitt/128.jpg"
    },
    {
      "id":"65",
      "createdAt":"2018-12-03T14:12:49.375Z",
      "name":"Lela Tillman",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/oktayelipek/128.jpg"
    },
    {
      "id":"66",
      "createdAt":"2018-12-02T23:30:45.997Z",
      "name":"Lela Turner",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mattsapii/128.jpg"
    },
    {
      "id":"67",
      "createdAt":"2018-12-03T02:09:59.442Z",
      "name":"Mr. Mozelle Koepp",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mcflydesign/128.jpg"
    },
    {
      "id":"68",
      "createdAt":"2018-12-03T05:55:04.077Z",
      "name":"Miss Kellen Batz",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/juamperro/128.jpg"
    },
    {
      "id":"69",
      "createdAt":"2018-12-02T19:49:08.059Z",
      "name":"Maurine VonRueden V",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/maikelk/128.jpg"
    },
    {
      "id":"70",
      "createdAt":"2018-12-03T12:55:02.316Z",
      "name":"Toney Hahn",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/guischmitt/128.jpg"
    },
    {
      "id":"71",
      "createdAt":"2018-12-03T09:11:57.573Z",
      "name":"Dennis Johns",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/dpmachado/128.jpg"
    },
    {
      "id":"72",
      "createdAt":"2018-12-03T12:42:02.006Z",
      "name":"Clint Kshlerin",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg"
    },
    {
      "id":"73",
      "createdAt":"2018-12-03T09:56:49.410Z",
      "name":"Cassidy Baumbach",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/8d3k/128.jpg"
    },
    {
      "id":"74",
      "createdAt":"2018-12-03T01:32:19.569Z",
      "name":"Sally McDermott",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/illyzoren/128.jpg"
    },
    {
      "id":"75",
      "createdAt":"2018-12-02T23:23:10.218Z",
      "name":"Dr. Heaven Bosco",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/raphaelnikson/128.jpg"
    },
    {
      "id":"76",
      "createdAt":"2018-12-03T05:07:05.549Z",
      "name":"Seth Bradtke",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/lepinski/128.jpg"
    },
    {
      "id":"77",
      "createdAt":"2018-12-03T14:34:39.994Z",
      "name":"Favian Rolfson Jr.",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/maximsorokin/128.jpg"
    },
    {
      "id":"78",
      "createdAt":"2018-12-02T19:54:14.710Z",
      "name":"Bria Waelchi",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/tobysaxon/128.jpg"
    },
    {
      "id":"79",
      "createdAt":"2018-12-03T02:14:38.882Z",
      "name":"Linnea Williamson",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/matt3224/128.jpg"
    },
    {
      "id":"80",
      "createdAt":"2018-12-03T01:57:46.136Z",
      "name":"Denis Smith",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bu7921/128.jpg"
    },
    {
      "id":"81",
      "createdAt":"2018-12-02T21:03:06.933Z",
      "name":"Elza Waters",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/kaspernordkvist/128.jpg"
    },
    {
      "id":"82",
      "createdAt":"2018-12-03T08:32:05.589Z",
      "name":"Dortha Rippin",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg"
    },
    {
      "id":"83",
      "createdAt":"2018-12-02T22:19:23.692Z",
      "name":"Elliot Hickle",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/geshan/128.jpg"
    },
    {
      "id":"84",
      "createdAt":"2018-12-03T02:06:08.637Z",
      "name":"Virgie Cummerata",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/xiel/128.jpg"
    },
    {
      "id":"85",
      "createdAt":"2018-12-03T07:45:25.344Z",
      "name":"Gunner D'Amore",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/jomarmen/128.jpg"
    },
    {
      "id":"86",
      "createdAt":"2018-12-03T15:48:12.330Z",
      "name":"Julianne Ward",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vitorleal/128.jpg"
    },
    {
      "id":"87",
      "createdAt":"2018-12-02T20:57:21.568Z",
      "name":"Justyn Howe",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/joeymurdah/128.jpg"
    },
    {
      "id":"88",
      "createdAt":"2018-12-03T05:00:57.983Z",
      "name":"Era Daugherty",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/victor_haydin/128.jpg"
    },
    {
      "id":"89",
      "createdAt":"2018-12-03T06:20:36.943Z",
      "name":"Jarret McDermott",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/rez___a/128.jpg"
    },
    {
      "id":"90",
      "createdAt":"2018-12-03T02:09:48.101Z",
      "name":"Mrs. Kale Nitzsche",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/msveet/128.jpg"
    },
    {
      "id":"91",
      "createdAt":"2018-12-02T22:45:48.396Z",
      "name":"Mr. Ottilie Casper",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg"
    },
    {
      "id":"92",
      "createdAt":"2018-12-03T00:09:38.475Z",
      "name":"Alberto Stamm",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/praveen_vijaya/128.jpg"
    },
    {
      "id":"93",
      "createdAt":"2018-12-02T22:35:44.571Z",
      "name":"Major Hilpert",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/robturlinckx/128.jpg"
    },
    {
      "id":"94",
      "createdAt":"2018-12-03T08:59:03.371Z",
      "name":"Austyn Hyatt",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/keryilmaz/128.jpg"
    },
    {
      "id":"95",
      "createdAt":"2018-12-03T06:28:52.558Z",
      "name":"Dr. Dorcas Littel",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/victorstuber/128.jpg"
    },
    {
      "id":"96",
      "createdAt":"2018-12-02T21:30:46.261Z",
      "name":"Betsy Hodkiewicz",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/demersdesigns/128.jpg"
    },
    {
      "id":"97",
      "createdAt":"2018-12-02T19:50:52.453Z",
      "name":"Uriah Kovacek",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/bereto/128.jpg"
    },
    {
      "id":"98",
      "createdAt":"2018-12-03T10:45:20.325Z",
      "name":"Jennyfer Roberts",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/amywebbb/128.jpg"
    },
    {
      "id":"99",
      "createdAt":"2018-12-03T16:41:31.335Z",
      "name":"Teresa Pouros",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/diansigitp/128.jpg"
    },
    {
      "id":"100",
      "createdAt":"2018-12-02T22:25:12.542Z",
      "name":"Raoul Mayert",
      "avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/levisan/128.jpg"
    }
    ]

    getData() {
      debugger;
      return new Observable((observers) => {
        setInterval(() => {
          debugger;
          observers.next(this.employeeList)
        }, 10000)
      })
    }

    deleteEmployee(empId: any) {
        debugger;
        this.employeeList = this.employeeList.filter((employee) => {
            return employee.id != empId;
        });

        this.listUpdatedEventEmitter.emit("ListUpdated")
    }
}