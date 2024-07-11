const wordData = [
  {
    word: "Abate",
    definition: "To lessen in intensity or degree.",
  },
  {
    word: "Abstain",
    definition: "To choose not to do something.",
  },
  {
    word: "Adept",
    definition: "Highly skilled.",
  },
  {
    word: "Admonish",
    definition: "To warn or reprimand someone firmly.",
  },
  {
    word: "Aesthetic",
    definition: "Concerned with beauty or the appreciation of beauty.",
  },
  {
    word: "Alacrity",
    definition: "Cheerful readiness, promptness, or willingness.",
  },
  {
    word: "Amiable",
    definition: "Friendly and pleasant.",
  },
  {
    word: "Apathy",
    definition: "Lack of interest, enthusiasm, or concern.",
  },
  {
    word: "Arduous",
    definition: "Involving or requiring strenuous effort.",
  },
  {
    word: "Ascertain",
    definition: "Find out for certain; make sure of.",
  },
  {
    word: "Astute",
    definition: "Having or showing an ability to accurately assess situations.",
  },
  {
    word: "Benevolent",
    definition: "Well-meaning and kindly.",
  },
  {
    word: "Bolster",
    definition: "To support or strengthen.",
  },
  {
    word: "Brevity",
    definition: "Concise and exact use of words in writing or speech.",
  },
  {
    word: "Cacophony",
    definition: "A harsh, discordant mixture of sounds.",
  },
  {
    word: "Capricious",
    definition:
      "Given to sudden and unaccountable changes of mood or behavior.",
  },
  {
    word: "Censure",
    definition: "To express severe disapproval.",
  },
  {
    word: "Chicanery",
    definition: "Trickery or deception.",
  },
  {
    word: "Clandestine",
    definition: "Kept secret or done secretively.",
  },
  {
    word: "Coerce",
    definition:
      "To persuade an unwilling person to do something by using force or threats.",
  },
  {
    word: "Cognizant",
    definition: "Having knowledge or being aware of.",
  },
  {
    word: "Concur",
    definition: "To agree.",
  },
  {
    word: "Condone",
    definition: "To accept or allow behavior that is considered morally wrong.",
  },
  {
    word: "Conundrum",
    definition: "A confusing and difficult problem or question.",
  },
  {
    word: "Copious",
    definition: "Abundant in supply or quantity.",
  },
  {
    word: "Cursory",
    definition: "Hasty and therefore not thorough or detailed.",
  },
  {
    word: "Debilitate",
    definition: "To make someone weak and infirm.",
  },
  {
    word: "Deference",
    definition: "Humble submission and respect.",
  },
  {
    word: "Delineate",
    definition: "Describe or portray precisely.",
  },
  {
    word: "Deride",
    definition: "To express contempt for; ridicule.",
  },
  {
    word: "Despondent",
    definition: "In low spirits from loss of hope or courage.",
  },
  {
    word: "Didactic",
    definition: "Intended to teach, particularly having moral instruction.",
  },
  {
    word: "Dilatory",
    definition: "Slow to act.",
  },
  {
    word: "Disparage",
    definition: "Regard or represent as being of little worth.",
  },
  {
    word: "Disparate",
    definition: "Essentially different in kind.",
  },
  {
    word: "Dogmatic",
    definition: "Inclined to lay down principles as incontrovertibly true.",
  },
  {
    word: "Ebullient",
    definition: "Cheerful and full of energy.",
  },
  {
    word: "Efficacy",
    definition: "The ability to produce a desired or intended result.",
  },
  {
    word: "Elucidate",
    definition: "Make (something) clear; explain.",
  },
  {
    word: "Emulate",
    definition: "Match or surpass, typically by imitation.",
  },
  {
    word: "Ephemeral",
    definition: "Lasting for a very short time.",
  },
  {
    word: "Equivocate",
    definition: "Use ambiguous language to conceal the truth.",
  },
  {
    word: "Erudite",
    definition: "Having or showing great knowledge.",
  },
  {
    word: "Esoteric",
    definition:
      "Intended for or likely to be understood by only a small number of people.",
  },
  {
    word: "Evanescent",
    definition: "Soon passing out of sight, memory, or existence.",
  },
  {
    word: "Exacerbate",
    definition: "To make a problem, bad situation, or negative feeling worse.",
  },
  {
    word: "Exculpate",
    definition: "Show or declare that someone is not guilty of wrongdoing.",
  },
  {
    word: "Exigent",
    definition: "Pressing; demanding.",
  },
  {
    word: "Exonerate",
    definition: "Absolve someone from blame.",
  },
  {
    word: "Expedite",
    definition: "Make an action or process happen sooner.",
  },
  {
    word: "Extol",
    definition: "Praise enthusiastically.",
  },
  {
    word: "Facetious",
    definition: "Treating serious issues with inappropriate humor.",
  },
  {
    word: "Fastidious",
    definition: "Very attentive to accuracy and detail.",
  },
  {
    word: "Fervent",
    definition: "Having or displaying a passionate intensity.",
  },
  {
    word: "Fortuitous",
    definition: "Happening by accident or chance.",
  },
  {
    word: "Frugal",
    definition: "Sparing or economical with regard to money or food.",
  },
  {
    word: "Garrulous",
    definition: "Excessively talkative.",
  },
  {
    word: "Gregarious",
    definition: "Fond of company; sociable.",
  },
  {
    word: "Harangue",
    definition: "A lengthy and aggressive speech.",
  },
  {
    word: "Impassive",
    definition: "Not feeling or showing emotion.",
  },
  {
    word: "Imperturbable",
    definition: "Unable to be upset or excited; calm.",
  },
  {
    word: "Inchoate",
    definition: "Just begun and not fully formed.",
  },
  {
    word: "Ineffable",
    definition: "Too great to be expressed in words.",
  },
  {
    word: "Inimical",
    definition: "Tending to obstruct or harm.",
  },
  {
    word: "Innocuous",
    definition: "Not harmful or offensive.",
  },
  {
    word: "Insipid",
    definition: "Lacking flavor; dull.",
  },
  {
    word: "Intrepid",
    definition: "Fearless; adventurous.",
  },
  {
    word: "Inundate",
    definition: "Overwhelm with things or people to be dealt with.",
  },
  {
    word: "Inveterate",
    definition:
      "Having a habit that is long-established and unlikely to change.",
  },
  {
    word: "Laconic",
    definition: "Using very few words.",
  },
  {
    word: "Laudable",
    definition: "Deserving praise and commendation.",
  },
  {
    word: "Lethargic",
    definition: "Sluggish and apathetic.",
  },
  {
    word: "Lucid",
    definition: "Expressed clearly; easy to understand.",
  },
  {
    word: "Magnanimous",
    definition: "Very generous or forgiving.",
  },
  {
    word: "Maverick",
    definition: "An unorthodox or independent-minded person.",
  },
  {
    word: "Mitigate",
    definition: "Make less severe, serious, or painful.",
  },
  {
    word: "Mollify",
    definition: "Appease the anger or anxiety of someone.",
  },
  {
    word: "Nefarious",
    definition: "Wicked or criminal.",
  },
  {
    word: "Nonchalant",
    definition: "Casually calm and relaxed.",
  },
  {
    word: "Obfuscate",
    definition: "Render obscure or unintelligible.",
  },
  {
    word: "Obsequious",
    definition: "Obedient or attentive to an excessive degree.",
  },
  {
    word: "Ostensible",
    definition: "Stated or appearing to be true, but not necessarily so.",
  },
  {
    word: "Ostentatious",
    definition: "Characterized by pretentious display; designed to impress.",
  },
  {
    word: "Palpable",
    definition: "Able to be touched or felt.",
  },
  {
    word: "Paragon",
    definition: "A perfect example of a particular quality.",
  },
  {
    word: "Pedantic",
    definition: "Excessively concerned with minor details or rules.",
  },
  {
    word: "Perfunctory",
    definition: "Carried out with minimum effort or reflection.",
  },
  {
    word: "Pernicious",
    definition: "Having a harmful effect.",
  },
  {
    word: "Pervasive",
    definition: "Spreading widely throughout an area or group.",
  },
  {
    word: "Phlegmatic",
    definition: "Having an unemotional and calm disposition.",
  },
  {
    word: "Placate",
    definition: "Make someone less angry or hostile.",
  },
  {
    word: "Platitude",
    definition: "A remark that has been used too often to be interesting.",
  },
  {
    word: "Precarious",
    definition: "Not securely held or in position; dangerously likely to fall.",
  },
  {
    word: "Proclivity",
    definition: "A tendency to choose or do something regularly.",
  },
  {
    word: "Prosaic",
    definition: "Having the style or diction of prose; lacking poetic beauty.",
  },
  {
    word: "Prudent",
    definition: "Acting with or showing care and thought for the future.",
  },
  {
    word: "Pugnacious",
    definition: "Eager or quick to argue or fight.",
  },
  {
    word: "Quintessential",
    definition: "Representing the most perfect example of something.",
  },
  {
    word: "Rancor",
    definition: "Bitterness or resentfulness.",
  },
  {
    word: "Recapitulate",
    definition: "Summarize and state again the main points.",
  },
];

export default wordData;
