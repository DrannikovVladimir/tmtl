const quizContainer = ReactDOM.createRoot(
  document.getElementById('quiz-container')
);

const data = {
  "quiz": {
    "title": "Какая страна тебе больше всего подходит для отдыха?",
    "questions": [
      {
        "id": "vacation_type",
        "text": "Какой вид отдыха ты предпочитаешь?",
        "options": [
          { "id": "beach", "text": "Пляжный отдых" },
          { "id": "mountain", "text": "Горный туризм" },
          { "id": "city", "text": "Экскурсионный тур" }
        ]
      },
      {
        "id": "cuisine",
        "text": "Какая кухня тебе больше нравится?",
        "options": [
          { "id": "asian", "text": "Азиатская" },
          { "id": "european", "text": "Европейская" },
          { "id": "mediterranean", "text": "Средиземноморская" }
        ]
      },
      {
        "id": "weather",
        "text": "Какую погоду ты предпочитаешь?",
        "options": [
          { "id": "warm", "text": "Теплую" },
          { "id": "cold", "text": "Прохладную" },
          { "id": "moderate", "text": "Умеренную" }
        ]
      },
      {
        "id": "culture",
        "text": "Насколько важна культура и традиции?",
        "options": [
          { "id": "very_important", "text": "Очень важны" },
          { "id": "moderately_important", "text": "Средне важны" },
          { "id": "not_important", "text": "Не очень важны" }
        ]
      },
      {
        "id": "budget",
        "text": "Какой у тебя бюджет?",
        "options": [
          { "id": "low", "text": "Низкий" },
          { "id": "medium", "text": "Средний" },
          { "id": "high", "text": "Высокий" }
        ]
      }
    ],
    "results": [
      {
        "country": "Таиланд",
        "preferences": {
          "vacation_type": "beach",
          "cuisine": "asian",
          "weather": "warm",
          "culture": "moderately_important",
          "budget": "medium"
        },
        "link": "/tours/thailand"
      },
      {
        "country": "Швейцария",
        "preferences": {
          "vacation_type": "mountain",
          "cuisine": "european",
          "weather": "cold",
          "culture": "very_important",
          "budget": "high"
        },
        "link": "/tours/switzerland"
      },
      {
        "country": "Италия",
        "preferences": {
          "vacation_type": "city",
          "cuisine": "mediterranean",
          "weather": "moderate",
          "culture": "very_important",
          "budget": "medium"
        },
        "link": "/tours/italy"
      },
      {
        "country": "Япония",
        "preferences": {
          "vacation_type": "city",
          "cuisine": "asian",
          "weather": "moderate",
          "culture": "very_important",
          "budget": "high"
        },
        "link": "/tours/japan"
      },
      {
        "country": "Испания",
        "preferences": {
          "vacation_type": "beach",
          "cuisine": "mediterranean",
          "weather": "warm",
          "culture": "moderately_important",
          "budget": "medium"
        },
        "link": "/tours/spain"
      },
      {
        "country": "Норвегия",
        "preferences": {
          "vacation_type": "mountain",
          "cuisine": "european",
          "weather": "cold",
          "culture": "moderately_important",
          "budget": "high"
        },
        "link": "/tours/norway"
      },
      {
        "country": "Вьетнам",
        "preferences": {
          "vacation_type": "beach",
          "cuisine": "asian",
          "weather": "warm",
          "culture": "very_important",
          "budget": "low"
        },
        "link": "/tours/vietnam"
      },
      {
        "country": "Германия",
        "preferences": {
          "vacation_type": "city",
          "cuisine": "european",
          "weather": "moderate",
          "culture": "very_important",
          "budget": "medium"
        },
        "link": "/tours/germany"
      },
      {
        "country": "Мексика",
        "preferences": {
          "vacation_type": "beach",
          "cuisine": "mediterranean",
          "weather": "warm",
          "culture": "moderately_important",
          "budget": "low"
        },
        "link": "/tours/mexico"
      },
      {
        "country": "Франция",
        "preferences": {
          "vacation_type": "city",
          "cuisine": "european",
          "weather": "moderate",
          "culture": "very_important",
          "budget": "high"
        },
        "link": "/tours/france"
      }
    ]
  }
};

const QuizComponent = () => {
  const [quizData, setQuizData] = React.useState(data);
  const [answers, setAnswers] = React.useState({});
  const [step, setStep] = React.useState(0);
  const [result, setResult] = React.useState(null);

  React.useEffect(() => {
    // Эмуляция запроса к серверу
    fetch('/api/quiz')
      .then(response => response.json())
      .then(data => setQuizData(data));
  }, []);

  const handleAnswer = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
    setStep(step + 1);
  };

  const calculateResult = () => {
    const { results } = quizData.quiz;
    const countryMatches = {};

    // Подсчет совпадений
    results.forEach((country) => {
      let matchCount = 0;

      // Сравнение предпочтений страны с ответами пользователя
      Object.keys(country.preferences).forEach((key) => {
        if (country.preferences[key] === answers[key]) {
          matchCount += 1;
        }
      });

      if (matchCount > 0) {
        countryMatches[country.country] = matchCount;
      }
    });

    const sortedResults = Object.entries(countryMatches)
      .sort(([, a], [, b]) => b - a)
      .map(([country, count]) => ({
        country,
        count,
        link: results.find((c) => c.country === country).link
      }));

    setResult(sortedResults);
  };

  const restartQuiz = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
  };

  console.log(answers)

  if (!quizData) return <div>Loading...</div>;

  if (result) {
    return (
      <div>
        <h2>Ваши результаты:</h2>
        {result.length > 0 ? (
          result.map((country, index) => (
            <div key={index}>
              <h3>{country.country} - {country.count} совпадений</h3>
              <a href={country.link}>Перейти к турам</a>
            </div>
          ))
        ) : (
          <p>Извините, не удалось найти подходящие страны.</p>
        )}
        <button onClick={restartQuiz}>Пройти тест ещё раз</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{quizData.quiz.title}</h1>
      {quizData.quiz.questions[step] ? (
        <div>
          <h2>{quizData.quiz.questions[step].text}</h2>
          {quizData.quiz.questions[step].options.map(option => (
            <button
              key={option.id}
              onClick={() => handleAnswer(quizData.quiz.questions[step].id, option.id)}
            >
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <button onClick={calculateResult}>Завершить тест</button>
      )}
    </div>
  );
};

quizContainer.render(<QuizComponent />);