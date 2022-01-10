# De slimste Preparees ter wereld - Server
Server application made in typescript that accompanies [dsptw-client](https://github.com/drskunk/dsptw-client).

Made by [DrSkunk](https://github.com/drskunk/) and [Robbertc5](https://github.com/robbertc5/).

## Installation
This requires [NodeJS](https://nodejs.org/en/) to be installed.

Clone `dsptw-server` into a directory and `cd` into it. Then run the command `npm install` to install all dependencies.
To start the application after setting the questions and the config file, run `npm start`.

## Client installation
Clone `dsptw-client` into the same directory as where you cloned the server and `cd` into it. Then run the command `npm install` to install all dependencies.
Then build the client files with `npm run build`.


## Config file
`config.json`
```json
{
    "port": 8080,
    "staticAssets": "your_static_folder",
    "staticClient": "your_built_client_files",
}
```
`port` is the port where the websocket server will be listening as well as the webserver for serving the client and static files.

`staticAssets` is where you set the location of the static files. This must be set to the directory containing your images and videos used in the different rounds. It must have the following directory structure. Sound files are optional.

**Important: Videos must be `.mp4`, images must be `.png` and audio files must be `.mp3`!**

- static
    - finale.json
    - aflevering1
        - questions.json
        - collectiefgeheugen
            - 1.mp4
            - 2.mp4
            - 3.mp4
        - galerij
            - 1
                - 1.png
                - 2.png
                - 3.png
                - 4.png
                - 5.png
                - 6.png
                - 7.png
                - 8.png
                - 9.png
                - 10.png
            - 2
                - 1.png
                - 2.png
                - ...
                - 10.png
            - 3
                - 1.png
                - 2.png
                - ...
                - 10.png
        - opendeur
            - 1.mp4
            - 2.mp4
            - 3.mp4
    - sound
        - answerCorrect.mp3
        - answerTimeout.mp3 (currently not used yet)
        - applause.mp3
        - bumper.mp3
        - itHasHappened.mp3
        - stopClock.mp3
        - thinkLoop.mp3


`staticClient` is where you built the client files. if you checked out the repositories in the same directory this will be `"../dsptw-client/build"`.

`episode` is how you choose which episode from the static folder will be used. `1` will use `aflevering1` for example.

`presenterName` is what is shown in the interface under the camera view of the presenter.

`presenterCamera` is an iframe which commonly uses obs.ninja so show a camera feed. It can also be an image link to show a still image.

`grandFinaleMode` If `true`, the finale round will be played with the two players with the _highest_ score. If `false`, the finale will be played with the two players with the _lowest_ score.

## Setting final questions
`finale.json` in the static assets folder contains all the questions that will be used in the `Finale` round. This is independent from episodes. In order to prevent the same questions from being asked, the `questionIndex` is used. This sets the index for the first question that will be asked in the quiz.

This is an example containing two questions, starting with the first one.

```json
{
    "questionIndex": 0,
    "questions": [
        {
            "question": "Count to five",
            "answers": [
                "One",
                "Two",
                "Three",
                "Four",
                "Five"
            ]
        },
        {
            "question": "What are the first five letters of the alphabet?",
            "answers": [
                "A",
                "B",
                "C",
                "D",
                "E"
            ]
        }
    ]
}

```

## Setting the episode questions
`static/aflevering1/questions.json` contain all the questions and answers that will be used, except for those in `Finale`. The relevant videos and images are automatically loaded because they follow the same naming scheme in each episode.

The `Puzzel` round grid is shuffled with a seed so that every time you restart the application with the same questions, it shows the same grid.

```json
{
    "drieZesNegen": [
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        },
        {
            "question": "",
            "answer": ""
        }
    ],
    "openDeur": [
        {
            "question": "",
            "answers": [
                "",
                "",
                "",
                ""
            ]
        },
        {
            "question": "",
            "answers": [
                "",
                "",
                "",
                ""
            ]
        },
        {
            "question": "",
            "answers": [
                "",
                "",
                "",
                ""
            ]
        }
    ],
    "puzzel": [
        [
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            }
        ],
        [
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            }
        ],
        [
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                "answer": "",
                "words": [
                    "",
                    "",
                    "",
                    ""
                ]
            }
        ]
    ],
    "galerij": [
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
        ]
    ],
    "collectiefGeheugen": [
        [
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            ""
        ],
        [
            "",
            "",
            "",
            "",
            ""
        ]
    ]
}
```
