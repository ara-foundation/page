const o={teacher:{title:"The Teacher and the Ancient Script",panels:[{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 480" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="room1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a2018"/>
          <stop offset="100%" stop-color="#1a1408"/>
        </linearGradient>
        <linearGradient id="skin1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8c49a"/>
          <stop offset="100%" stop-color="#d4a87a"/>
        </linearGradient>
        <linearGradient id="desk1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5c3d1e"/>
          <stop offset="100%" stop-color="#3d2810"/>
        </linearGradient>
        <linearGradient id="screen1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a2a3a"/>
          <stop offset="100%" stop-color="#0d1a26"/>
        </linearGradient>
        <filter id="shadow1">
          <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Room background -->
      <rect width="720" height="480" fill="url(#room1)"/>

      <!-- Back wall with subtle texture lines -->
      <rect x="0" y="0" width="720" height="320" fill="#1e160a" opacity="0.6"/>
      <line x1="0" y1="180" x2="720" y2="180" stroke="#2a1e0d" stroke-width="1"/>

      <!-- Bookshelf on wall -->
      <rect x="480" y="30" width="210" height="160" fill="#2a1e0d" rx="2"/>
      <rect x="488" y="38" width="194" height="12" fill="#3d2e1a"/>
      <!-- Books -->
      <rect x="492" y="52" width="14" height="80" fill="#8b4513" rx="1"/>
      <rect x="508" y="52" width="10" height="80" fill="#4169e1" rx="1"/>
      <rect x="520" y="52" width="16" height="80" fill="#2d5a1b" rx="1"/>
      <rect x="538" y="52" width="12" height="80" fill="#8b1a1a" rx="1"/>
      <rect x="552" y="52" width="18" height="80" fill="#4a3520" rx="1"/>
      <rect x="572" y="52" width="10" height="80" fill="#1a4a3a" rx="1"/>
      <rect x="584" y="52" width="14" height="80" fill="#6b3a8a" rx="1"/>
      <rect x="600" y="52" width="16" height="80" fill="#8a6b1a" rx="1"/>
      <rect x="618" y="52" width="12" height="80" fill="#c0392b" rx="1"/>
      <rect x="632" y="52" width="14" height="80" fill="#16a085" rx="1"/>
      <rect x="648" y="52" width="10" height="80" fill="#8e44ad" rx="1"/>
      <rect x="660" y="52" width="16" height="80" fill="#2c3e50" rx="1"/>
      <!-- Shelf divider -->
      <rect x="488" y="134" width="194" height="6" fill="#3d2e1a"/>
      <!-- Second shelf smaller books -->
      <rect x="492" y="142" width="10" height="40" fill="#c0392b" rx="1"/>
      <rect x="504" y="142" width="14" height="40" fill="#27ae60" rx="1"/>
      <rect x="520" y="142" width="10" height="40" fill="#f39c12" rx="1"/>
      <rect x="532" y="142" width="18" height="40" fill="#2980b9" rx="1"/>
      <rect x="552" y="142" width="12" height="40" fill="#8e44ad" rx="1"/>
      <!-- Small ornament on shelf -->
      <ellipse cx="640" cy="138" rx="10" ry="14" fill="#c9a84c" opacity="0.7"/>
      <rect x="636" y="152" width="8" height="16" fill="#8a7a3a"/>

      <!-- Wall lamp -->
      <rect x="80" y="40" width="6" height="60" fill="#4a3a2a"/>
      <path d="M 50 40 Q 83 20 116 40 L 108 100 Q 83 85 58 100 Z" fill="#2a2018" stroke="#5a4a2a" stroke-width="1"/>
      <ellipse cx="83" cy="95" rx="28" ry="8" fill="#f5c842" opacity="0.15"/>
      <!-- Warm glow from lamp -->
      <ellipse cx="83" cy="180" rx="120" ry="60" fill="#f5c842" opacity="0.04"/>

      <!-- DESK -->
      <rect x="60" y="350" width="500" height="20" fill="url(#desk1)" rx="3"/>
      <rect x="80" y="370" width="20" height="80" fill="#3d2810"/>
      <rect x="460" y="370" width="20" height="80" fill="#3d2810"/>

      <!-- MONITOR -->
      <rect x="200" y="200" width="260" height="155" fill="#111" rx="4" filter="url(#shadow1)"/>
      <rect x="204" y="204" width="252" height="147" fill="url(#screen1)" rx="3"/>
      <!-- Monitor stand -->
      <rect x="318" y="355" width="24" height="16" fill="#222"/>
      <rect x="300" y="368" width="60" height="8" fill="#222" rx="2"/>

      <!-- Screen content - presentation software -->
      <rect x="204" y="204" width="252" height="14" fill="#1e2e3e" rx="3"/>
      <circle cx="212" cy="211" r="3" fill="#ff5f57"/>
      <circle cx="222" cy="211" r="3" fill="#ffbd2e"/>
      <circle cx="232" cy="211" r="3" fill="#28c840"/>
      <text x="248" y="214" font-family="monospace" font-size="7" fill="#4a6a8a">presentation.ara — slide 4</text>

      <!-- Slide area -->
      <rect x="210" y="222" width="165" height="120" fill="#f8f5f0" rx="2"/>
      <rect x="216" y="228" width="80" height="6" fill="#ccc" rx="1"/>
      <rect x="216" y="238" width="140" height="4" fill="#e0e0e0" rx="1"/>
      <rect x="216" y="246" width="120" height="4" fill="#e0e0e0" rx="1"/>
      <rect x="216" y="258" width="150" height="60" fill="#e8e4dc" rx="1"/>
      <text x="290" y="292" font-family="serif" font-size="18" fill="#ccc" text-anchor="middle">🖼</text>
      <text x="290" y="310" font-family="sans-serif" font-size="7" fill="#bbb" text-anchor="middle">add visual here</text>

      <!-- Toolbar panel right -->
      <rect x="378" y="222" width="72" height="120" fill="#16263a" rx="1"/>
      <rect x="382" y="228" width="64" height="8" fill="#1e3350" rx="1"/>
      <text x="414" y="235" font-family="sans-serif" font-size="6" fill="#4a7aaa" text-anchor="middle">ELEMENTS</text>
      <rect x="384" y="240" width="28" height="22" fill="#1e3350" rx="2"/>
      <rect x="416" y="240" width="28" height="22" fill="#1e3350" rx="2"/>
      <rect x="384" y="266" width="28" height="22" fill="#1e3350" rx="2"/>
      <rect x="416" y="266" width="28" height="22" fill="#1e3350" rx="2"/>
      <text x="398" y="254" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#4a7aaa">T</text>
      <text x="430" y="254" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#4a7aaa">⬜</text>
      <text x="398" y="280" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#4a7aaa">📷</text>
      <text x="430" y="280" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#4a7aaa">≡</text>

      <!-- TEACHER CHARACTER -->
      <!-- Body / chair -->
      <ellipse cx="150" cy="460" rx="55" ry="20" fill="#1a1408" opacity="0.4"/>
      <!-- Legs -->
      <rect x="120" y="400" width="18" height="55" fill="#2c3e50" rx="4"/>
      <rect x="152" y="400" width="18" height="55" fill="#2c3e50" rx="4"/>
      <!-- Shoes -->
      <ellipse cx="129" cy="456" rx="14" ry="6" fill="#1a1208"/>
      <ellipse cx="161" cy="456" rx="14" ry="6" fill="#1a1208"/>
      <!-- Torso - shirt + cardigan -->
      <rect x="105" y="290" width="80" height="120" fill="#d4c5b0" rx="8"/>
      <!-- Cardigan -->
      <path d="M 105 290 L 125 290 L 145 340 L 145 410 L 105 410 Z" fill="#8b6914" opacity="0.8"/>
      <path d="M 185 290 L 165 290 L 145 340 L 145 410 L 185 410 Z" fill="#8b6914" opacity="0.8"/>
      <!-- Shirt collar -->
      <path d="M 130 290 L 145 310 L 160 290" fill="none" stroke="#e8e0d0" stroke-width="2"/>
      <!-- Tie -->
      <path d="M 142 295 L 148 295 L 150 330 L 145 338 L 140 330 Z" fill="#8b1a1a"/>
      <rect x="141" y="298" width="8" height="3" fill="#6b1414"/>
      <!-- Arms -->
      <rect x="82" y="295" width="26" height="70" fill="#8b6914" rx="8"/>
      <rect x="182" y="295" width="26" height="70" fill="#8b6914" rx="8"/>
      <!-- Hands -->
      <ellipse cx="95" cy="368" rx="13" ry="10" fill="url(#skin1)"/>
      <ellipse cx="195" cy="368" rx="13" ry="10" fill="url(#skin1)"/>
      <!-- Neck -->
      <rect x="133" y="258" width="24" height="36" fill="url(#skin1)" rx="4"/>
      <!-- Head -->
      <ellipse cx="145" cy="235" rx="42" ry="48" fill="url(#skin1)"/>
      <!-- Hair - grey, receding, professorial -->
      <path d="M 103 215 Q 110 175 145 170 Q 180 175 187 215 Q 180 195 145 192 Q 110 195 103 215 Z" fill="#9a9a9a"/>
      <path d="M 103 215 Q 100 225 102 235 Q 104 225 108 220 Z" fill="#9a9a9a"/>
      <path d="M 187 215 Q 190 225 188 235 Q 186 225 182 220 Z" fill="#9a9a9a"/>
      <!-- Side hair bits -->
      <path d="M 103 220 Q 96 240 100 255 Q 105 238 108 228 Z" fill="#8a8a8a"/>
      <path d="M 187 220 Q 194 240 190 255 Q 185 238 182 228 Z" fill="#8a8a8a"/>
      <!-- Ears -->
      <ellipse cx="104" cy="238" rx="8" ry="10" fill="#d4a87a"/>
      <ellipse cx="186" cy="238" rx="8" ry="10" fill="#d4a87a"/>
      <!-- Eyes -->
      <ellipse cx="132" cy="235" rx="7" ry="5" fill="white"/>
      <ellipse cx="158" cy="235" rx="7" ry="5" fill="white"/>
      <circle cx="134" cy="236" r="4" fill="#3a2a1a"/>
      <circle cx="160" cy="236" r="4" fill="#3a2a1a"/>
      <circle cx="135" cy="235" r="1.5" fill="white"/>
      <circle cx="161" cy="235" r="1.5" fill="white"/>
      <!-- Glasses -->
      <rect x="123" y="229" width="18" height="13" fill="none" stroke="#4a3a2a" stroke-width="2" rx="3"/>
      <rect x="149" y="229" width="18" height="13" fill="none" stroke="#4a3a2a" stroke-width="2" rx="3"/>
      <line x1="141" y1="235" x2="149" y2="235" stroke="#4a3a2a" stroke-width="2"/>
      <line x1="104" y1="235" x2="123" y2="235" stroke="#4a3a2a" stroke-width="1.5"/>
      <line x1="167" y1="235" x2="186" y2="235" stroke="#4a3a2a" stroke-width="1.5"/>
      <!-- Eyebrows - furrowed, concentrating -->
      <path d="M 123 226 Q 131 222 140 225" fill="none" stroke="#7a6a5a" stroke-width="2" stroke-linecap="round"/>
      <path d="M 150 225 Q 158 222 167 226" fill="none" stroke="#7a6a5a" stroke-width="2" stroke-linecap="round"/>
      <!-- Mouth - focused, slight frown -->
      <path d="M 137 252 Q 145 256 153 252" fill="none" stroke="#b08060" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Moustache -->
      <path d="M 133 246 Q 145 250 157 246" fill="#8a7a6a" stroke="none"/>
      <!-- Pointing finger toward screen -->
      <line x1="195" y1="365" x2="280" y2="310" stroke="#d4a87a" stroke-width="4" stroke-linecap="round"/>
      <!-- Pencil in hand -->
      <rect x="72" y="358" width="6" height="24" fill="#f5e642" rx="1" transform="rotate(-30 75 370)"/>
      <polygon points="72,382 78,382 75,390" fill="#e8c49a" transform="rotate(-30 75 382)"/>

      <!-- THOUGHT BUBBLE — needs a papyrus element -->
      <ellipse cx="320" cy="120" rx="140" ry="55" fill="#fffff0" stroke="#333" stroke-width="2.5"/>
      <ellipse cx="210" cy="168" rx="12" ry="8" fill="#fffff0" stroke="#333" stroke-width="2"/>
      <ellipse cx="196" cy="180" rx="7" ry="5" fill="#fffff0" stroke="#333" stroke-width="1.5"/>
      <ellipse cx="185" cy="189" rx="4" ry="3" fill="#fffff0" stroke="#333" stroke-width="1.5"/>
      <text x="320" y="108" font-family="serif" font-size="13" fill="#333" text-anchor="middle">I need an ancient-style</text>
      <text x="320" y="126" font-family="serif" font-size="13" fill="#333" text-anchor="middle">visual for this slide…</text>
      <text x="320" y="148" font-family="serif" font-size="11" fill="#888" text-anchor="middle">something with papyrus texture</text>

      <!-- Caption box -->
      <rect x="0" y="548" width="720" height="32" fill="#111"/>
    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg2b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#12100a"/>
          <stop offset="100%" stop-color="#0a0908"/>
        </linearGradient>
        <linearGradient id="holo1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1a2a1a"/>
          <stop offset="100%" stop-color="#0d1e10"/>
        </linearGradient>
        <linearGradient id="holo2" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#1a1a2a"/>
          <stop offset="100%" stop-color="#0d0d1e"/>
        </linearGradient>
        <filter id="hologlw">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <filter id="softglw">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>

      <!-- Background -->
      <rect width="720" height="500" fill="url(#bg2b)"/>

      <!-- ── LEFT HALF: Screen with menu + frustrated teacher ── -->

      <!-- Monitor -->
      <rect x="28" y="40" width="340" height="250" fill="#111" rx="5"/>
      <rect x="32" y="44" width="332" height="242" fill="#1a1510" rx="4"/>
      <!-- Titlebar -->
      <rect x="32" y="44" width="332" height="16" fill="#221a10" rx="4"/>
      <circle cx="41" cy="52" r="4" fill="#ff5f57"/>
      <circle cx="53" cy="52" r="4" fill="#ffbd2e"/>
      <circle cx="65" cy="52" r="4" fill="#28c840"/>
      <text x="198" y="56" font-family="monospace" font-size="7" fill="#6a5a3a" text-anchor="middle">presentation.ara</text>

      <!-- App menu bar -->
      <rect x="32" y="60" width="332" height="18" fill="#1e1810"/>
      <text x="46" y="73" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">File</text>
      <text x="74" y="73" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Edit</text>
      <text x="100" y="73" font-family="'Nanum Gothic'" font-size="9" fill="#c9a84c" font-weight="700">Format</text>
      <text x="140" y="73" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Insert</text>
      <text x="172" y="73" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">View</text>

      <!-- Dropdown: Format menu open -->
      <rect x="96" y="78" width="130" height="115" fill="#2a2215" stroke="#4a3a1a" stroke-width="1" rx="2"/>
      <rect x="97" y="79" width="128" height="18" fill="#3a2e18"/>
      <text x="108" y="92" font-family="'Nanum Gothic'" font-size="9" fill="#c9a84c">Paragraph Style</text>
      <line x1="98" y1="97" x2="224" y2="97" stroke="#4a3a1a" stroke-width="0.5"/>
      <text x="108" y="110" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Character</text>
      <rect x="97" y="114" width="128" height="18" fill="#3a2e18"/>
      <text x="108" y="127" font-family="'Nanum Gothic'" font-size="9" fill="#e8e2d8" font-weight="700">Fonts  ▶</text>
      <line x1="98" y1="132" x2="224" y2="132" stroke="#4a3a1a" stroke-width="0.5"/>
      <text x="108" y="145" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Text Color</text>
      <text x="108" y="162" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Spacing</text>
      <text x="108" y="179" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Alignment</text>

      <!-- Sub-dropdown: Fonts -->
      <rect x="226" y="114" width="120" height="100" fill="#2a2215" stroke="#4a3a1a" stroke-width="1" rx="2"/>
      <text x="236" y="132" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">System</text>
      <text x="236" y="149" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Web Fonts</text>
      <rect x="227" y="153" width="118" height="18" fill="#3a2e18"/>
      <text x="236" y="166" font-family="'Nanum Gothic'" font-size="9" fill="#e8e2d8" font-weight="700">Unicode  ▶</text>
      <text x="236" y="183" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Recent</text>
      <text x="236" y="200" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Custom</text>

      <!-- Sub-sub-dropdown: Unicode -->
      <rect x="346" y="153" width="118" height="85" fill="#2a2215" stroke="#4a3a1a" stroke-width="1" rx="2"/>
      <text x="356" y="171" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Arabic</text>
      <text x="356" y="188" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Cyrillic</text>
      <text x="356" y="205" font-family="'Nanum Gothic'" font-size="9" fill="#9a8a6a">Greek</text>
      <rect x="347" y="209" width="116" height="18" fill="#3a2e18"/>
      <text x="356" y="222" font-family="'Nanum Gothic'" font-size="9" fill="#c9a84c" font-weight="700">Papyrus  ✓</text>

      <!-- Arrow showing selection path -->
      <text x="210" y="126" font-size="8" fill="#c9a84c">›</text>
      <text x="330" y="166" font-size="8" fill="#c9a84c">›</text>

      <!-- Slide preview in background behind menu — looks wrong/generic -->
      <rect x="36" y="82" width="56" height="36" fill="#1e1810" opacity="0.5"/>
      <text x="64" y="98" font-family="sans-serif" font-size="6" fill="#4a3a2a" text-anchor="middle">slide preview</text>
      <text x="64" y="108" font-family="serif" font-size="8" fill="#5a4a2a" text-anchor="middle">Papyrus Applied</text>
      <text x="64" y="116" font-family="serif" font-size="5" fill="#4a3a1a" text-anchor="middle" font-style="italic">[bad result]</text>

      <!-- Monitor stand -->
      <rect x="186" y="290" width="24" height="14" fill="#1a1a1a"/>
      <rect x="164" y="302" width="68" height="6" fill="#1a1a1a" rx="2"/>

      <!-- TEACHER — bottom left, frustrated expression -->
      <g transform="translate(478,-30) scale(0.72)">
      <!-- Body -->
      <rect x="50" y="420" width="72" height="100" fill="#8b6914" rx="7"/>
      <!-- Shirt / tie -->
      <rect x="70" y="425" width="14" height="40" fill="#d4c5b0"/>
      <path d="M 74 428 L 77 428 L 79 448 L 77 453 L 75 448 Z" fill="#8b1a1a"/>
      <!-- Arms — one elbow on desk frustrated, one raised -->
      <rect x="24" y="428" width="28" height="55" fill="#8b6914" rx="7"/>
      <rect x="120" y="425" width="26" height="55" fill="#8b6914" rx="7"/>
      <!-- Fist on desk -->
      <ellipse cx="38" cy="485" rx="15" ry="10" fill="#d4a87a"/>
      <!-- Hand pointing at screen -->
      <ellipse cx="145" cy="482" rx="13" ry="9" fill="#d4a87a"/>
      <!-- Neck -->
      <rect x="74" y="398" width="20" height="28" fill="#d4a87a" rx="3"/>
      <!-- Head -->
      <ellipse cx="84" cy="378" rx="38" ry="42" fill="#d4a87a"/>
      <!-- Hair grey -->
      <path d="M 46 360 Q 52 322 84 316 Q 116 322 122 360 Q 116 338 84 335 Q 52 338 46 360 Z" fill="#9a9a9a"/>
      <path d="M 46 364 Q 40 382 43 396 Q 48 378 52 368 Z" fill="#8a8a8a"/>
      <path d="M 122 364 Q 128 382 125 396 Q 120 378 116 368 Z" fill="#8a8a8a"/>
      <!-- Ears -->
      <ellipse cx="47" cy="380" rx="7" ry="9" fill="#c4987a"/>
      <ellipse cx="121" cy="380" rx="7" ry="9" fill="#c4987a"/>
      <!-- Eyes — frustrated squint, looking at screen sideways -->
      <ellipse cx="72" cy="374" rx="7" ry="5" fill="white"/>
      <ellipse cx="96" cy="374" rx="7" ry="5" fill="white"/>
      <circle cx="74" cy="375" r="4" fill="#3a2a1a"/>
      <circle cx="98" cy="375" r="4" fill="#3a2a1a"/>
      <!-- Pupils shifted left toward screen -->
      <circle cx="73" cy="375" r="2" fill="white"/>
      <circle cx="97" cy="375" r="2" fill="white"/>
      <!-- Glasses pushed down nose slightly (frustrated) -->
      <rect x="63" y="371" width="14" height="10" fill="none" stroke="#4a3a2a" stroke-width="1.8" rx="2"/>
      <rect x="81" y="371" width="14" height="10" fill="none" stroke="#4a3a2a" stroke-width="1.8" rx="2"/>
      <line x1="77" y1="376" x2="81" y2="376" stroke="#4a3a2a" stroke-width="1.6"/>
      <line x1="47" y1="376" x2="63" y2="376" stroke="#4a3a2a" stroke-width="1.4"/>
      <line x1="95" y1="376" x2="121" y2="376" stroke="#4a3a2a" stroke-width="1.4"/>
      <!-- Angry brows -->
      <path d="M 63 366 Q 71 360 80 364" fill="none" stroke="#7a6a5a" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 82 364 Q 90 360 98 366" fill="none" stroke="#7a6a5a" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Grimace mouth -->
      <path d="M 72 394 Q 84 390 96 394" fill="none" stroke="#b08060" stroke-width="2" stroke-linecap="round"/>
      <!-- Moustache -->
      <path d="M 70 388 Q 84 393 98 388" fill="#8a7a6a"/>
      <!-- Sweat drop -->
      <path d="M 122 345 Q 128 333 134 345 Q 134 355 128 355 Q 122 355 122 345 Z" fill="#6aacff" opacity="0.6"/>
      </g>

      <!-- Speech bubble — frustrated (next to menu navigation) -->
      <rect x="470" y="84" width="220" height="75" fill="#1a0808" stroke="#8a2a2a" stroke-width="1.5" rx="6"/>
      <path d="M 560 160 L 572 174 L 584 160 Z" fill="#1a0808" stroke="#8a2a2a" stroke-width="1.5"/>
      <text x="580" y="108" font-family="'Nanum Gothic'" font-size="11" fill="#ff8a8a" text-anchor="middle" font-weight="700">This looks terrible.</text>
      <text x="580" y="128" font-family="'Nanum Gothic'" font-size="10" fill="#aa5a5a" text-anchor="middle">Generic. Wrong texture.</text>
      <text x="580" y="146" font-family="'Nanum Gothic'" font-size="10" fill="#aa5a5a" text-anchor="middle">Not what I needed at all.</text>

      <!-- Caption -->
      <rect x="0" y="468" width="720" height="32" fill="#111"/>
    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 620" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg2c" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0f1512"/>
          <stop offset="100%" stop-color="#080c0a"/>
        </linearGradient>
        <linearGradient id="holo3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1a2a1a"/>
          <stop offset="100%" stop-color="#0d1e10"/>
        </linearGradient>
        <linearGradient id="holo4" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#1a1a2a"/>
          <stop offset="100%" stop-color="#0d0d1e"/>
        </linearGradient>
        <filter id="softglw2">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
        <filter id="holoGlow">
          <feGaussianBlur stdDeviation="2.5" result="g"/>
          <feMerge>
            <feMergeNode in="g"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <rect width="720" height="620" fill="url(#bg2c)"/>
      <ellipse cx="360" cy="302" rx="220" ry="235" fill="#2a8a4a" opacity="0.05" filter="url(#softglw2)"/>

      <!-- Presentation desktop frame (same visual language as panel 1 monitor) -->
      <rect x="136" y="92" width="448" height="430" fill="#111" rx="6" filter="url(#softglw2)"/>
      <rect x="142" y="98" width="436" height="418" fill="#0f1a24" rx="4"/>
      <rect x="142" y="98" width="436" height="18" fill="#1e2e3e" rx="4"/>
      <circle cx="154" cy="107" r="3" fill="#ff5f57"/>
      <circle cx="164" cy="107" r="3" fill="#ffbd2e"/>
      <circle cx="174" cy="107" r="3" fill="#28c840"/>
      <text x="196" y="110" font-family="monospace" font-size="8" fill="#4a6a8a">presentation.ara — recommended components</text>
      <rect x="148" y="124" width="424" height="386" fill="#101820" rx="3"/>

      <!-- Full-screen sample slide on monitor -->
      <rect x="160" y="136" width="400" height="356" fill="#f7f2e8" stroke="#d9c8a8" stroke-width="1" rx="5"/>
      <rect x="160" y="136" width="400" height="22" fill="#e6d8be" rx="5"/>
      <text x="360" y="150" font-family="monospace" font-size="8" fill="#8b6b3a" text-anchor="middle">ANCIENT EGYPT — SAMPLE SLIDE</text>
      <text x="360" y="188" font-family="serif" font-size="24" fill="#7a5a2a" text-anchor="middle" font-style="italic">Life Along the Nile</text>
      <rect x="188" y="206" width="344" height="148" fill="#ede3cf" rx="3"/>
      <text x="360" y="292" font-family="serif" font-size="56" fill="#b89045" text-anchor="middle">𓇳 𓈖 𓇋 𓂀</text>
      <text x="188" y="388" font-family="sans-serif" font-size="10" fill="#7a6a4a">• Seasonal flooding enriched the soil for agriculture.</text>
      <text x="188" y="406" font-family="sans-serif" font-size="10" fill="#7a6a4a">• River transport connected cities, temples, and trade routes.</text>
      <text x="188" y="424" font-family="sans-serif" font-size="10" fill="#7a6a4a">• Art, writing, and rituals reflected life around the Nile.</text>

      <!-- Left side global author area (outside monitor) -->
      <text x="18" y="150" font-family="monospace" font-size="7" fill="#7fd8bf">GLOBAL AUTHORS</text>

      <!-- Author 1: lady teacher -->
      <circle cx="34" cy="194" r="14" fill="#1a2c2a" stroke="#4ec79d" stroke-width="1"/>
      <ellipse cx="34" cy="193" rx="7" ry="8" fill="#ddb193"/>
      <path d="M 26 189 Q 34 182 42 189 Q 40 194 34 193 Q 28 194 26 189 Z" fill="#413228"/>
      <circle cx="31" cy="193" r="1.2" fill="#2a1a0a"/>
      <circle cx="37" cy="193" r="1.2" fill="#2a1a0a"/>
      <path d="M 31 198 Q 34 200 37 198" fill="none" stroke="#a87359" stroke-width="0.9"/>
      <text x="52" y="189" font-family="monospace" font-size="5.8" fill="#9fe5ca">author</text>
      <text x="52" y="197" font-family="monospace" font-size="5.8" fill="#9fe5ca">Morocco</text>
      <text x="52" y="205" font-family="monospace" font-size="5.2" fill="#8ecfb8">prepared presentation</text>
      <text x="52" y="212" font-family="monospace" font-size="5.2" fill="#8ecfb8">about Egypt too</text>


      <!-- Author 2: classic teacher portrait -->
      <circle cx="34" cy="332" r="14" fill="#1f2230" stroke="#72b7ff" stroke-width="1"/>
      <ellipse cx="34" cy="331" rx="7" ry="8" fill="#d7ad87"/>
      <path d="M 26 327 Q 34 321 42 327 Q 40 333 34 332 Q 28 333 26 327 Z" fill="#91877a"/>
      <rect x="29" y="329" width="4" height="3" fill="none" stroke="#4a3a2a" stroke-width="0.7" rx="1"/>
      <rect x="35" y="329" width="4" height="3" fill="none" stroke="#4a3a2a" stroke-width="0.7" rx="1"/>
      <line x1="33" y1="330.5" x2="35" y2="330.5" stroke="#4a3a2a" stroke-width="0.6"/>
      <path d="M 30 335 Q 34 337 38 335" fill="none" stroke="#a87359" stroke-width="0.9"/>
      <text x="52" y="327" font-family="monospace" font-size="5.8" fill="#aad5ff">author</text>
      <text x="52" y="335" font-family="monospace" font-size="5.8" fill="#aad5ff">Chile</text>
      <text x="52" y="343" font-family="monospace" font-size="5.2" fill="#9ec3ea">papyrus for</text>
      <text x="52" y="350" font-family="monospace" font-size="5.2" fill="#9ec3ea">presentation app</text>


      <!-- Recommendations back inside monitor -->
      <rect x="160" y="158" width="200" height="230" fill="#08141d" opacity="0.56" rx="4"/>
      <text x="172" y="173" font-family="monospace" font-size="7" fill="#8db5d6">NETWORK RECOMMENDATIONS</text>

      <!-- Recommendation 1 holographic island -->
      <rect x="170" y="182" width="180" height="86" fill="url(#holo3)" stroke="#2a8a6a" stroke-width="0.8" rx="4" opacity="0.76" filter="url(#holoGlow)">
        <animate attributeName="opacity" values="0.64;0.86;0.64" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="y" values="182;180;182" dur="2.8s" repeatCount="indefinite"/>
      </rect>
      <rect x="171" y="186" width="178" height="6" fill="#7fffd4" opacity="0.12">
        <animate attributeName="y" values="186;258;186" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;0.22;0" dur="2.2s" repeatCount="indefinite"/>
      </rect>
      <rect x="178" y="192" width="82" height="12" fill="#0d2a1a" stroke="#2a6a4a" stroke-width="0.6" rx="6" opacity="0.85"/>
      <text x="219" y="201" font-family="monospace" font-size="7" fill="#4aaa6a" text-anchor="middle">PONEGLYPH FONT</text>
      <text x="180" y="220" font-family="serif" font-size="9" fill="#dfc377" font-style="italic">Ancient Egyptian Writing</text>
      <text x="180" y="241" font-family="serif" font-size="18" fill="#dfc377" opacity="0.9">𓂀 𓆑 𓏏</text>
      <text x="180" y="258" font-family="monospace" font-size="7" fill="#66b88c">used by 18 teachers</text>

      <!-- Recommendation 2 holographic island -->
      <rect x="170" y="276" width="180" height="102" fill="url(#holo4)" stroke="#2a6a8a" stroke-width="0.8" rx="4" opacity="0.74" filter="url(#holoGlow)">
        <animate attributeName="opacity" values="0.6;0.84;0.6" dur="2.7s" repeatCount="indefinite"/>
        <animate attributeName="y" values="276;274;276" dur="3.1s" repeatCount="indefinite"/>
      </rect>
      <rect x="171" y="282" width="178" height="7" fill="#8ad4ff" opacity="0.1">
        <animate attributeName="y" values="282;370;282" dur="2.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;0.2;0" dur="2.6s" repeatCount="indefinite"/>
      </rect>
      <rect x="178" y="286" width="86" height="12" fill="#0d1a2a" stroke="#2a4a6a" stroke-width="0.6" rx="6" opacity="0.85"/>
      <text x="221" y="295" font-family="monospace" font-size="7" fill="#4a8aaa" text-anchor="middle">PHARAOH-FONT</text>
      <text x="180" y="315" font-family="serif" font-size="8" fill="#dfc377" font-style="italic">Formal writing system used</text>
      <text x="180" y="329" font-family="serif" font-size="8" fill="#dfc377" font-style="italic">for over 3,000 years.</text>
      <text x="180" y="364" font-family="monospace" font-size="7" fill="#6ea6c8">open license · verified</text>

      <!-- Teacher reaction moved here (right side) -->
      <ellipse cx="620" cy="340" rx="42" ry="48" fill="#d4a87a"/>
      <path d="M 578 324 Q 586 286 620 282 Q 654 286 662 324 Q 654 306 620 303 Q 586 306 578 324 Z" fill="#9a9a9a"/>
      <ellipse cx="588" cy="343" rx="7" ry="10" fill="#c4987a"/>
      <ellipse cx="652" cy="343" rx="7" ry="10" fill="#c4987a"/>
      <ellipse cx="606" cy="336" rx="8" ry="9" fill="white" stroke="#333" stroke-width="0.8"/>
      <ellipse cx="634" cy="336" rx="8" ry="9" fill="white" stroke="#333" stroke-width="0.8"/>
      <circle cx="607" cy="338" r="4.8" fill="#3a2a1a"/>
      <circle cx="635" cy="338" r="4.8" fill="#3a2a1a"/>
      <circle cx="608" cy="336" r="1.6" fill="white"/>
      <circle cx="636" cy="336" r="1.6" fill="white"/>
      <rect x="598" y="330" width="16" height="11" fill="none" stroke="#4a3a2a" stroke-width="1.4" rx="2"/>
      <rect x="626" y="330" width="16" height="11" fill="none" stroke="#4a3a2a" stroke-width="1.4" rx="2"/>
      <line x1="614" y1="335.5" x2="626" y2="335.5" stroke="#4a3a2a" stroke-width="1.2"/>
      <path d="M 604 324 Q 611 319 619 322" fill="none" stroke="#7a6a5a" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M 621 322 Q 629 319 636 324" fill="none" stroke="#7a6a5a" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M 608 360 Q 620 372 632 360" fill="none" stroke="#b08060" stroke-width="2.1" stroke-linecap="round"/>
      <path d="M 608 353 Q 620 358 632 353" fill="#8a7a6a"/>

      <!-- Greenish speech bubble -->
      <path d="M 566 294 L 578 306 L 590 294 Z" fill="#dff8e8" stroke="#3a8f6d" stroke-width="1.4"/>
      <rect x="434" y="232" width="170" height="62" fill="#dff8e8" stroke="#3a8f6d" stroke-width="1.8" rx="8"/>
      <text x="519" y="252" font-family="'Nanum Gothic'" font-size="12" fill="#245c46" text-anchor="middle" font-weight="700">Someone already made this!</text>
      <text x="519" y="269" font-family="'Nanum Gothic'" font-size="10" fill="#2f6f54" text-anchor="middle">Thanks, Morrocan teacher.</text>
      <text x="519" y="284" font-family="'Nanum Gothic'" font-size="10" fill="#2f6f54" text-anchor="middle">I'll use your font.</text>

      <rect x="0" y="588" width="720" height="32" fill="#111"/>
    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 540" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="papyrus4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#3a2810"/>
          <stop offset="100%" stop-color="#2a1c08"/>
        </linearGradient>
        <linearGradient id="room4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a1408"/>
          <stop offset="100%" stop-color="#100e06"/>
        </linearGradient>
      </defs>

      <rect width="720" height="540" fill="url(#room4)"/>

      <!-- Warm light glow from monitor -->
      <ellipse cx="360" cy="260" rx="280" ry="160" fill="#c9a84c" opacity="0.06"/>

      <!-- Monitor showing completed slide -->
      <rect x="130" y="60" width="460" height="290" fill="#111" rx="6"/>
      <rect x="136" y="66" width="448" height="278" fill="#0d1a10" rx="4"/>
      <rect x="136" y="66" width="448" height="18" fill="#162018" rx="4"/>
      <circle cx="148" cy="75" r="4" fill="#ff5f57"/>
      <circle cx="160" cy="75" r="4" fill="#ffbd2e"/>
      <circle cx="172" cy="75" r="4" fill="#28c840"/>
      <text x="360" y="79" font-family="monospace" font-size="8" fill="#4a8a5a" text-anchor="middle">presentation.ara — slide 4 ✓</text>

      <!-- The papyrus slide — beautiful -->
      <rect x="150" y="96" width="410" height="232" fill="url(#papyrus4)" rx="2"/>
      <!-- Papyrus texture lines -->
      <line x1="150" y1="112" x2="560" y2="112" stroke="#c9a84c" stroke-width="0.3" opacity="0.3"/>
      <line x1="150" y1="128" x2="560" y2="128" stroke="#c9a84c" stroke-width="0.3" opacity="0.2"/>
      <line x1="150" y1="144" x2="560" y2="144" stroke="#c9a84c" stroke-width="0.3" opacity="0.3"/>
      <line x1="150" y1="160" x2="560" y2="160" stroke="#c9a84c" stroke-width="0.3" opacity="0.2"/>
      <line x1="150" y1="176" x2="560" y2="176" stroke="#c9a84c" stroke-width="0.3" opacity="0.3"/>
      <line x1="150" y1="192" x2="560" y2="192" stroke="#c9a84c" stroke-width="0.3" opacity="0.2"/>
      <line x1="150" y1="208" x2="560" y2="208" stroke="#c9a84c" stroke-width="0.3" opacity="0.3"/>
      <line x1="150" y1="224" x2="560" y2="224" stroke="#c9a84c" stroke-width="0.3" opacity="0.2"/>
      <line x1="150" y1="240" x2="560" y2="240" stroke="#c9a84c" stroke-width="0.3" opacity="0.3"/>
      <line x1="150" y1="256" x2="560" y2="256" stroke="#c9a84c" stroke-width="0.3" opacity="0.2"/>
      <line x1="150" y1="272" x2="560" y2="272" stroke="#c9a84c" stroke-width="0.3" opacity="0.3"/>
      <!-- Border decoration -->
      <rect x="154" y="100" width="402" height="224" fill="none" stroke="#c9a84c" stroke-width="1" opacity="0.4" rx="1"/>
      <rect x="158" y="104" width="394" height="216" fill="none" stroke="#c9a84c" stroke-width="0.5" opacity="0.2" rx="1"/>

      <!-- Slide title in papyrus style -->
      <text x="355" y="130" font-family="serif" font-size="18" fill="#c9a84c" text-anchor="middle" font-style="italic">Ancient Egyptian Writing Systems</text>
      <line x1="200" y1="138" x2="510" y2="138" stroke="#c9a84c" stroke-width="0.8" opacity="0.5"/>

      <!-- Hieroglyphs large -->
      <text x="240" y="200" font-family="serif" font-size="40" fill="#c9a84c" opacity="0.85" text-anchor="middle">𓂀 𓆑 𓏏</text>
      <text x="240" y="240" font-family="serif" font-size="22" fill="#c9a84c" opacity="0.6" text-anchor="middle">𓇋 𓃀 𓈖 𓇌 𓎡</text>

      <!-- Text column right -->
      <rect x="380" y="150" width="160" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>
      <rect x="380" y="162" width="145" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>
      <rect x="380" y="174" width="155" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>
      <rect x="380" y="186" width="130" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>
      <rect x="380" y="210" width="150" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>
      <rect x="380" y="222" width="140" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>
      <rect x="380" y="234" width="160" height="5" fill="#c9a84c" opacity="0.2" rx="1"/>

      <!-- Monitor stand -->
      <rect x="348" y="350" width="24" height="16" fill="#1a1a1a"/>
      <rect x="318" y="364" width="84" height="8" fill="#1a1a1a" rx="2"/>

      <!-- Teacher leaning back, satisfied, arms crossed loosely -->
      <ellipse cx="580" cy="460" rx="55" ry="16" fill="#000" opacity="0.3"/>
      <!-- Simple satisfied teacher torso at side -->
      <rect x="545" y="330" width="70" height="110" fill="#8b6914" rx="8"/>
      <rect x="520" y="340" width="28" height="60" fill="#8b6914" rx="8"/>
      <rect x="612" y="340" width="28" height="60" fill="#8b6914" rx="8"/>
      <!-- Arms crossed -->
      <path d="M 520 360 Q 545 375 580 370 Q 615 375 640 360" fill="none" stroke="#8b6914" stroke-width="18" stroke-linecap="round"/>
      <ellipse cx="580" cy="316" rx="35" ry="40" fill="#d4a87a"/>
      <!-- Hair -->
      <path d="M 545 298 Q 555 268 580 265 Q 605 268 615 298 Q 608 280 580 278 Q 552 280 545 298 Z" fill="#9a9a9a"/>
      <ellipse cx="564" cy="317" rx="6" ry="8" fill="white" stroke="#333" stroke-width="1"/>
      <ellipse cx="596" cy="317" rx="6" ry="8" fill="white" stroke="#333" stroke-width="1"/>
      <circle cx="565" cy="318" r="4" fill="#3a2a1a"/>
      <circle cx="597" cy="318" r="4" fill="#3a2a1a"/>
      <!-- Glasses -->
      <rect x="557" y="312" width="16" height="11" fill="none" stroke="#4a3a2a" stroke-width="1.8" rx="2"/>
      <rect x="579" y="312" width="16" height="11" fill="none" stroke="#4a3a2a" stroke-width="1.8" rx="2"/>
      <line x1="573" y1="317" x2="579" y2="317" stroke="#4a3a2a" stroke-width="1.6"/>
      <!-- Satisfied smile -->
      <path d="M 568 336 Q 580 344 592 336" fill="none" stroke="#b08060" stroke-width="2" stroke-linecap="round"/>
      <!-- Moustache -->
      <path d="M 566 330 Q 580 335 594 330" fill="#8a7a6a"/>

      <!-- Small speech bubble -->
      <ellipse cx="510" cy="295" rx="85" ry="30" fill="#fffff0" stroke="#333" stroke-width="1.5"/>
      <path d="M 540 322 L 548 330 L 532 326 Z" fill="#fffff0" stroke="#333" stroke-width="1"/>
      <text x="510" y="291" font-family="'Nanum Gothic'" font-size="11" fill="#333" text-anchor="middle" font-weight="700">Perfect.</text>

    </svg>`}]},programmer:{title:"The Programmer Who Kept Pressing Pause",panels:[{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="room5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a0f18"/>
          <stop offset="100%" stop-color="#060a10"/>
        </linearGradient>
        <linearGradient id="skin5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c8a87a"/>
          <stop offset="100%" stop-color="#b89060"/>
        </linearGradient>
        <linearGradient id="hoodie5" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2a3545"/>
          <stop offset="100%" stop-color="#1e2838"/>
        </linearGradient>
      </defs>

      <rect width="720" height="600" fill="url(#room5)"/>

      <!-- Ambient blue glow from screens -->
      <ellipse cx="360" cy="300" rx="320" ry="200" fill="#3a6aaa" opacity="0.05"/>

      <!-- Physical monitor (about 3/5 width) -->
      <rect x="18" y="124" width="444" height="266" fill="#05070d" rx="10"/>
      <rect x="24" y="130" width="432" height="252" fill="#0b0d14" rx="8"/>
      <rect x="30" y="136" width="420" height="240" fill="#080b10" rx="6"/>
      <ellipse cx="240" cy="386" rx="26" ry="3" fill="#9aa6bf" opacity="0.25"/>

      <!-- Window 1: video player -->
      <rect x="44" y="170" width="188" height="192" fill="#0a0f1a" rx="5" stroke="#2e466d" stroke-width="1.2"/>
      <rect x="44" y="170" width="188" height="18" fill="#1a2538" rx="5"/>
      <circle cx="56" cy="179" r="2.6" fill="#ff5f57"/>
      <circle cx="64" cy="179" r="2.6" fill="#ffbd2e"/>
      <circle cx="72" cy="179" r="2.6" fill="#28c840"/>
      <text x="142" y="182" font-family="monospace" font-size="7" fill="#7890bf" text-anchor="middle">tutorial-player</text>
      <rect x="52" y="196" width="172" height="112" fill="#040610" rx="2"/>
      <polygon points="127,232 127,272 161,252" fill="#9fb7ff" opacity="0.9"/>
      <rect x="58" y="318" width="160" height="7" fill="#1d2940" rx="3"/>
      <rect x="58" y="318" width="58" height="7" fill="#5d79c8" rx="3"/>
      <circle cx="116" cy="321.5" r="4" fill="#b4c7ff"/>
      <text x="138" y="345" font-family="monospace" font-size="8" fill="#6d82b4" text-anchor="middle">rust_tutorial.mp4</text>

      <!-- Window 2: code editor UI placeholder -->
      <rect x="248" y="170" width="192" height="192" fill="#0a130b" rx="5" stroke="#2f5a37" stroke-width="1.2"/>
      <rect x="248" y="170" width="192" height="18" fill="#1a2d1d" rx="5"/>
      <circle cx="260" cy="179" r="2.6" fill="#ff5f57"/>
      <circle cx="268" cy="179" r="2.6" fill="#ffbd2e"/>
      <circle cx="276" cy="179" r="2.6" fill="#28c840"/>
      <text x="344" y="182" font-family="monospace" font-size="7" fill="#7caf7a" text-anchor="middle">main.rs</text>
      <rect x="256" y="195" width="180" height="14" fill="#132016" rx="2"/>
      <text x="263" y="205" font-family="monospace" font-size="7" fill="#5f8e61">src/main.rs</text>
      <rect x="256" y="216" width="168" height="5" fill="#325e34" rx="1" opacity="0.8"/>
      <rect x="264" y="228" width="128" height="5" fill="#3a7240" rx="1" opacity="0.8"/>
      <rect x="264" y="240" width="150" height="5" fill="#3a7240" rx="1" opacity="0.7"/>
      <rect x="264" y="252" width="118" height="5" fill="#325e34" rx="1" opacity="0.7"/>
      <rect x="256" y="268" width="104" height="5" fill="#325e34" rx="1" opacity="0.6"/>
      <rect x="256" y="280" width="8" height="13" fill="#6aff6a" opacity="0.8">
        <animate attributeName="opacity" values="0.8;0;0.8" dur="1s" repeatCount="indefinite"/>
      </rect>

      <!-- Monitor stand -->
      <rect x="228" y="390" width="24" height="14" fill="#0c1019"/>
      <rect x="207" y="402" width="66" height="8" fill="#0c1019" rx="2"/>

      <!-- PROGRAMMER CHARACTER (moved right, about 1/5 width presence) -->
      <g transform="translate(220, 0)">
      <ellipse cx="340" cy="500" rx="60" ry="18" fill="#000" opacity="0.4"/>
      <!-- Chair -->
      <rect x="298" y="420" width="84" height="60" fill="#1a2030" rx="4"/>
      <rect x="290" y="480" width="16" height="50" fill="#141820" rx="2"/>
      <rect x="374" y="480" width="16" height="50" fill="#141820" rx="2"/>
      <!-- Legs -->
      <rect x="308" y="430" width="22" height="55" fill="#1a1a2a" rx="4"/>
      <rect x="350" y="430" width="22" height="55" fill="#1a1a2a" rx="4"/>
      <!-- Shoes -->
      <ellipse cx="319" cy="487" rx="16" ry="7" fill="#0a0a0f"/>
      <ellipse cx="361" cy="487" rx="16" ry="7" fill="#0a0a0f"/>
      <!-- Hoodie body -->
      <rect x="290" y="290" width="100" height="150" fill="#2a3545" rx="10"/>
      <!-- Hoodie pocket -->
      <rect x="316" y="380" width="48" height="40" fill="#242e3e" rx="4"/>
      <!-- Hoodie hood at back -->
      <path d="M 290 295 Q 310 270 340 265 Q 370 270 390 295" fill="#242e3e"/>
      <!-- Arms reaching to keyboard -->
      <rect x="262" y="295" width="30" height="80" fill="#2a3545" rx="8"/>
      <rect x="388" y="295" width="30" height="80" fill="#2a3545" rx="8"/>
      <!-- Hands on keyboard -->
      <ellipse cx="277" cy="378" rx="18" ry="12" fill="#b89060"/>
      <ellipse cx="403" cy="378" rx="18" ry="12" fill="#b89060"/>
      <!-- Neck -->
      <rect x="325" y="258" width="30" height="38" fill="#b89060" rx="4"/>
      <!-- Head -->
      <ellipse cx="340" cy="232" rx="52" ry="56" fill="#c8a87a"/>
      <!-- Messy hair — programmer style, dark, slightly unkempt -->
      <path d="M 288 210 Q 295 155 340 148 Q 385 155 392 210" fill="#1a1408"/>
      <path d="M 288 210 Q 282 235 286 255" fill="#1a1408"/>
      <path d="M 392 210 Q 398 235 394 255" fill="#1a1408"/>
      <!-- Messy bits sticking up -->
      <path d="M 320 148 Q 318 135 325 130 Q 330 145 320 148 Z" fill="#1a1408"/>
      <path d="M 345 148 Q 350 130 358 135 Q 356 148 345 148 Z" fill="#1a1408"/>
      <path d="M 332 148 Q 334 132 340 128 Q 346 132 348 148 Q 342 142 332 148 Z" fill="#1a1408"/>
      <!-- Ears -->
      <ellipse cx="289" cy="235" rx="9" ry="12" fill="#b89060"/>
      <ellipse cx="391" cy="235" rx="9" ry="12" fill="#b89060"/>
      <!-- Eyes — focused, slight squint at screens -->
      <ellipse cx="322" cy="230" rx="9" ry="7" fill="white"/>
      <ellipse cx="358" cy="230" rx="9" ry="7" fill="white"/>
      <circle cx="324" cy="231" r="5" fill="#1a1408"/>
      <circle cx="360" cy="231" r="5" fill="#1a1408"/>
      <circle cx="325" cy="229" r="2" fill="white"/>
      <circle cx="361" cy="229" r="2" fill="white"/>
      <!-- Eyebrows - concentrated -->
      <path d="M 312 221 Q 321 217 331 221" fill="none" stroke="#3a2a18" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M 349 221 Q 358 217 367 221" fill="none" stroke="#3a2a18" stroke-width="2.5" stroke-linecap="round"/>
      <!-- Slight stubble -->
      <ellipse cx="340" cy="258" rx="24" ry="10" fill="#2a1a08" opacity="0.2"/>
      <!-- Focused mouth -->
      <path d="M 330 254 Q 340 258 350 254" fill="none" stroke="#a08060" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Headphones on head -->
      <path d="M 290 215 Q 290 175 340 172 Q 390 175 390 215" fill="none" stroke="#3a4a5a" stroke-width="8" stroke-linecap="round"/>
      <rect x="282" y="210" width="16" height="22" fill="#2a3a4a" rx="4"/>
      <rect x="382" y="210" width="16" height="22" fill="#2a3a4a" rx="4"/>
      </g>

      <!-- Dev chat bubble -->
      <rect x="450" y="98" width="220" height="52" fill="#0f1624" stroke="#5a7aa5" stroke-width="1.5" rx="10"/>
      <path d="M 586 150 L 565 206 L 610 156 Z" fill="#0f1624" stroke="#5a7aa5" stroke-width="1.5"/>
      <text x="560" y="129" font-family="'Nanum Gothic'" font-size="12" fill="#dce8ff" text-anchor="middle" font-weight="700">I'm learning rust for hack.rs</text>

    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 520" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg6" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#100808"/>
          <stop offset="100%" stop-color="#080508"/>
        </linearGradient>
      </defs>
      <rect width="720" height="520" fill="url(#bg6)"/>

      <!-- Left side: student with smaller head -->
      <rect x="0" y="0" width="288" height="488" fill="#100a08"/>
      <ellipse cx="134" cy="458" rx="64" ry="16" fill="#000" opacity="0.32"/>
      <rect x="86" y="320" width="96" height="130" fill="#2a3545" rx="12"/>
      <rect x="112" y="390" width="44" height="34" fill="#242e3e" rx="5"/>
      <rect x="64" y="334" width="26" height="74" fill="#2a3545" rx="8"/>
      <rect x="178" y="334" width="26" height="74" fill="#2a3545" rx="8"/>
      <ellipse cx="77" cy="410" rx="15" ry="10" fill="#b89060"/>
      <ellipse cx="191" cy="410" rx="15" ry="10" fill="#b89060"/>
      <rect x="122" y="286" width="24" height="36" fill="#b89060" rx="4"/>
      <ellipse cx="134" cy="255" rx="42" ry="46" fill="#c8a87a"/>
      <path d="M 92 239 Q 99 193 134 188 Q 169 193 176 239" fill="#1a1408"/>
      <path d="M 92 239 Q 88 259 90 274" fill="#1a1408"/>
      <path d="M 176 239 Q 180 259 178 274" fill="#1a1408"/>
      <ellipse cx="100" cy="258" rx="8" ry="11" fill="#b89060"/>
      <ellipse cx="168" cy="258" rx="8" ry="11" fill="#b89060"/>
      <ellipse cx="121" cy="252" rx="8" ry="6" fill="white"/>
      <ellipse cx="147" cy="252" rx="8" ry="6" fill="white"/>
      <circle cx="122" cy="253" r="4.4" fill="#1a1408"/>
      <circle cx="148" cy="253" r="4.4" fill="#1a1408"/>
      <path d="M 111 244 Q 121 239 131 244" fill="none" stroke="#3a2a18" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 137 244 Q 147 239 157 244" fill="none" stroke="#3a2a18" stroke-width="2.8" stroke-linecap="round"/>
      <path d="M 118 277 Q 134 286 150 277" fill="#8a6a4a"/>
      <rect x="122" y="274" width="10" height="6" fill="white" rx="1"/>
      <rect x="134" y="274" width="10" height="6" fill="white" rx="1"/>
      <rect x="146" y="274" width="10" height="6" fill="white" rx="1"/>
      <path d="M 101 246 Q 101 214 134 210 Q 167 214 167 246" fill="none" stroke="#3a4a5a" stroke-width="8" stroke-linecap="round"/>
      <rect x="92" y="242" width="12" height="18" fill="#2a3a4a" rx="3"/>
      <rect x="164" y="242" width="12" height="18" fill="#2a3a4a" rx="3"/>

      <!-- Chat bubble -->
      <rect x="40" y="96" width="184" height="56" fill="#1a0808" stroke="#8a2a2a" stroke-width="2" rx="10"/>
      <path d="M 136 152 L 126 171 L 148 156 Z" fill="#1a0808" stroke="#8a2a2a" stroke-width="2"/>
      <text x="132" y="125" font-family="'Nanum Gothic'" font-size="11" fill="#ff8a8a" text-anchor="middle" font-weight="700">Switching windows irritates.</text>
      <text x="132" y="139" font-family="'Nanum Gothic'" font-size="11" fill="#ff8a8a" text-anchor="middle" font-weight="700">Automate?</text>

      <!-- Right side: 3/5 monitor with two windows -->
      <rect x="270" y="88" width="432" height="284" fill="#05070d" rx="10"/>
      <rect x="276" y="94" width="420" height="272" fill="#0b0d14" rx="8"/>
      <rect x="282" y="100" width="408" height="260" fill="#080b10" rx="6"/>

      <!-- Tutorial window -->
      <rect x="298" y="136" width="180" height="208" fill="#0a0f1a" rx="5" stroke="#2e466d" stroke-width="1.2">
        <animate attributeName="stroke" dur="5s" repeatCount="indefinite" values="#2e466d;#2e466d;#7aa2ff;#7aa2ff;#2e466d;#2e466d" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
        <animate attributeName="stroke-width" dur="5s" repeatCount="indefinite" values="1.2;1.2;2.4;2.4;1.2;1.2" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </rect>
      <rect x="298" y="136" width="180" height="18" fill="#1a2538" rx="5"/>
      <circle cx="310" cy="145" r="2.6" fill="#ff5f57"/>
      <circle cx="318" cy="145" r="2.6" fill="#ffbd2e"/>
      <circle cx="326" cy="145" r="2.6" fill="#28c840"/>
      <text x="388" y="148" font-family="monospace" font-size="7" fill="#7890bf" text-anchor="middle">tutorial-player</text>
      <rect x="306" y="162" width="164" height="118" fill="#040610" rx="2"/>
      <!-- Tutorial explanation shown during video dwell -->
      <rect x="316" y="174" width="144" height="82" fill="#0f1d33" opacity="0">
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;0.86;0.86;0;0" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </rect>
      <text x="388" y="194" font-family="monospace" font-size="8" fill="#dbe8ff" text-anchor="middle" opacity="0">Rust ownership explained
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;1;1;0;0" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </text>
      <rect x="326" y="206" width="86" height="4" fill="#8fb7ff" rx="1" opacity="0">
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;0.95;0.95;0;0" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
        <animate attributeName="width" dur="5s" repeatCount="indefinite" values="24;24;86;86;24;24" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </rect>
      <rect x="326" y="216" width="102" height="4" fill="#7aa2ff" rx="1" opacity="0">
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;0.9;0.9;0;0" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
        <animate attributeName="width" dur="5s" repeatCount="indefinite" values="18;18;102;102;18;18" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </rect>
      <rect x="326" y="226" width="72" height="4" fill="#9bc1ff" rx="1" opacity="0">
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;0.85;0.85;0;0" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
        <animate attributeName="width" dur="5s" repeatCount="indefinite" values="14;14;72;72;14;14" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </rect>
      <text x="388" y="232" font-family="sans-serif" font-size="28" fill="#6a8fff" text-anchor="middle">▶
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="1;1;1;0;0" keyTimes="0;0.18;0.3;0.72;1"/>
      </text>
      <text x="388" y="232" font-family="sans-serif" font-size="28" fill="#4a4a7a" text-anchor="middle">⏸
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;1;1;0" keyTimes="0;0.18;0.3;0.72;1"/>
      </text>
      <rect x="312" y="292" width="152" height="7" fill="#1d2940" rx="3"/>
      <rect x="312" y="292" width="72" height="7" fill="#aa2a2a" rx="3">
        <animate attributeName="width" dur="5s" repeatCount="indefinite" values="24;24;96;128;24" keyTimes="0;0.3;0.52;0.72;1"/>
      </rect>
      <text x="388" y="322" font-family="monospace" font-size="8" fill="#6d82b4" text-anchor="middle">rust_tutorial.mp4</text>

      <!-- Code editor window -->
      <rect x="494" y="136" width="180" height="208" fill="#0a130b" rx="5" stroke="#2f5a37" stroke-width="1.2">
        <animate attributeName="stroke" dur="5s" repeatCount="indefinite" values="#7cff8a;#7cff8a;#2f5a37;#2f5a37;#7cff8a;#7cff8a" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
        <animate attributeName="stroke-width" dur="5s" repeatCount="indefinite" values="2.4;2.4;1.2;1.2;2.4;2.4" keyTimes="0;0.18;0.3;0.72;0.82;1"/>
      </rect>
      <rect x="494" y="136" width="180" height="18" fill="#1a2d1d" rx="5"/>
      <circle cx="506" cy="145" r="2.6" fill="#ff5f57"/>
      <circle cx="514" cy="145" r="2.6" fill="#ffbd2e"/>
      <circle cx="522" cy="145" r="2.6" fill="#28c840"/>
      <text x="584" y="148" font-family="monospace" font-size="7" fill="#7caf7a" text-anchor="middle">main.rs</text>
      <rect x="502" y="160" width="164" height="14" fill="#132016" rx="2"/>
      <text x="508" y="170" font-family="monospace" font-size="7" fill="#5f8e61">src/main.rs</text>
      <!-- Animated sample Rust typing after cursor returns to editor -->
      <text x="504" y="188" font-family="monospace" font-size="7" fill="#7ed58a" opacity="0">fn main() {
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="1;1;0;0;1;1" keyTimes="0;0.18;0.22;0.82;0.86;1"/>
      </text>
      <text x="510" y="200" font-family="monospace" font-size="7" fill="#9bd9a3" opacity="0">let nums = vec![1, 2, 3];
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="1;1;0;0;1;1" keyTimes="0;0.18;0.22;0.86;0.9;1"/>
      </text>
      <text x="510" y="212" font-family="monospace" font-size="7" fill="#9bd9a3" opacity="0">println!("{:?}", nums);
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="1;1;0;0;1;1" keyTimes="0;0.18;0.22;0.9;0.94;1"/>
      </text>
      <text x="504" y="224" font-family="monospace" font-size="7" fill="#7ed58a" opacity="0">}
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="1;1;0;0;1;1" keyTimes="0;0.18;0.22;0.94;0.97;1"/>
      </text>
      <rect x="504" y="176" width="6" height="10" fill="#6aff6a" opacity="0">
        <animate attributeName="y" dur="5s" repeatCount="indefinite" values="212;212;176;188;200;212;212" keyTimes="0;0.18;0.82;0.9;0.95;0.998;1"/>
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0.95;0.95;0;0;0.95;0.95" keyTimes="0;0.18;0.22;0.82;0.86;1"/>
      </rect>

      <!-- Animated pointer: code -> video pause click -> code -->
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          dur="5s"
          repeatCount="indefinite"
          values="560 236;560 236;384 228;384 228;560 236;560 236"
          keyTimes="0;0.18;0.3;0.72;0.82;1"
        />
        <polygon points="0,0 0,16 5,12 9,20 12,19 8,11 15,11" fill="#f0f3ff" stroke="#1a1a24" stroke-width="1"/>
      </g>
      <circle cx="388" cy="232" r="3" fill="none" stroke="#d7e4ff" stroke-width="1.2" opacity="0">
        <animate attributeName="opacity" dur="5s" repeatCount="indefinite" values="0;0;1;0;0;0" keyTimes="0;0.18;0.3;0.36;0.96;1"/>
        <animate attributeName="r" dur="5s" repeatCount="indefinite" values="3;3;3;8;3;3" keyTimes="0;0.18;0.3;0.36;0.96;1"/>
      </circle>

      <!-- Monitor stand -->
      <rect x="478" y="372" width="20" height="18" fill="#0c1019"/>
      <rect x="448" y="388" width="80" height="8" fill="#0c1019" rx="3"/>
    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a0d14"/>
          <stop offset="100%" stop-color="#070a10"/>
        </linearGradient>
        <linearGradient id="mon7" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e2534"/>
          <stop offset="100%" stop-color="#121722"/>
        </linearGradient>
      </defs>
      <rect width="720" height="500" fill="url(#bg7)"/>

      <!-- Center monitor -->
      <rect x="185" y="54" width="350" height="250" rx="12" fill="url(#mon7)" stroke="#2f3e58" stroke-width="2"/>
      <rect x="200" y="70" width="320" height="210" rx="6" fill="#090d15" stroke="#1f2b3f" stroke-width="1"/>

      <!-- Left app window -->
      <g>
        <rect x="212" y="84" width="146" height="178" rx="5" fill="#0f1420" stroke="#506ea4" stroke-width="1.3">
          <animate attributeName="x" dur="8s" repeatCount="indefinite" values="212;212;228;228;228;212" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="y" dur="8s" repeatCount="indefinite" values="84;84;102;102;102;84" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="width" dur="8s" repeatCount="indefinite" values="146;146;118;118;118;146" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="height" dur="8s" repeatCount="indefinite" values="178;178;140;140;140;178" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
        </rect>
        <rect x="212" y="84" width="146" height="18" rx="5" fill="#1a2438" opacity="0.95">
          <animate attributeName="x" dur="8s" repeatCount="indefinite" values="212;212;228;228;228;212" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="y" dur="8s" repeatCount="indefinite" values="84;84;102;102;102;84" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="width" dur="8s" repeatCount="indefinite" values="146;146;118;118;118;146" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
        </rect>
        <circle cx="222" cy="93" r="2.1" fill="#ff6b6b">
          <animate attributeName="cx" dur="8s" repeatCount="indefinite" values="222;222;238;238;238;222" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="93;93;111;111;111;93" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="1;1;1;0;0;1" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <circle cx="229" cy="93" r="2.1" fill="#ffd166">
          <animate attributeName="cx" dur="8s" repeatCount="indefinite" values="229;229;245;245;245;229" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="93;93;111;111;111;93" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="1;1;1;0;0;1" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <circle cx="236" cy="93" r="2.1" fill="#28c840">
          <animate attributeName="cx" dur="8s" repeatCount="indefinite" values="236;236;252;252;252;236" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="93;93;111;111;111;93" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="1;1;1;0;0;1" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <text x="285" y="96" font-family="monospace" font-size="8" fill="#9ab4e3" text-anchor="middle">tutorial.mp4
          <animate attributeName="x" dur="8s" repeatCount="indefinite" values="285;285;287;287;287;285" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="y" dur="8s" repeatCount="indefinite" values="96;96;114;114;114;96" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
        </text>
      </g>

      <!-- Right app window -->
      <g>
        <rect x="362" y="84" width="146" height="178" rx="5" fill="#111a12" stroke="#4f8a4f" stroke-width="1.3">
          <animate attributeName="x" dur="8s" repeatCount="indefinite" values="362;362;374;374;374;362" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="y" dur="8s" repeatCount="indefinite" values="84;84;102;102;102;84" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="width" dur="8s" repeatCount="indefinite" values="146;146;118;118;118;146" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="height" dur="8s" repeatCount="indefinite" values="178;178;140;140;140;178" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
        </rect>
        <rect x="362" y="84" width="146" height="18" rx="5" fill="#1c2d1f" opacity="0.95">
          <animate attributeName="x" dur="8s" repeatCount="indefinite" values="362;362;374;374;374;362" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="y" dur="8s" repeatCount="indefinite" values="84;84;102;102;102;84" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="width" dur="8s" repeatCount="indefinite" values="146;146;118;118;118;146" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
        </rect>
        <circle cx="372" cy="93" r="2.1" fill="#ff6b6b">
          <animate attributeName="cx" dur="8s" repeatCount="indefinite" values="372;372;384;384;384;372" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="93;93;111;111;111;93" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="1;1;1;0;0;1" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <circle cx="379" cy="93" r="2.1" fill="#ffd166">
          <animate attributeName="cx" dur="8s" repeatCount="indefinite" values="379;379;391;391;391;379" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="93;93;111;111;111;93" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="1;1;1;0;0;1" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <circle cx="386" cy="93" r="2.1" fill="#28c840">
          <animate attributeName="cx" dur="8s" repeatCount="indefinite" values="386;386;398;398;398;386" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="cy" dur="8s" repeatCount="indefinite" values="93;93;111;111;111;93" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="1;1;1;0;0;1" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <text x="435" y="96" font-family="monospace" font-size="8" fill="#9bd99b" text-anchor="middle">main.rs
          <animate attributeName="x" dur="8s" repeatCount="indefinite" values="435;435;433;433;433;435" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
          <animate attributeName="y" dur="8s" repeatCount="indefinite" values="96;96;114;114;114;96" keyTimes="0;0.2;0.35;0.7;0.9;1"/>
        </text>
      </g>

      <!-- Outside border appears around both small windows -->
      <g>
        <rect x="216" y="92" width="288" height="168" rx="7" fill="none" stroke="#d4824a" stroke-width="2" opacity="0">
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;0;0.95;0.95;0" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </rect>
        <rect x="216" y="92" width="288" height="18" rx="7" fill="#d4824a" opacity="0">
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;0;0.95;0.95;0" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </rect>
        <circle cx="226" cy="101" r="2.1" fill="#ff6b6b" opacity="0">
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;0;1;1;0" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <circle cx="233" cy="101" r="2.1" fill="#ffd166" opacity="0">
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;0;1;1;0" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <circle cx="240" cy="101" r="2.1" fill="#28c840" opacity="0">
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;0;1;1;0" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </circle>
        <text x="360" y="104" font-family="'Nanum Gothic'" font-size="10" fill="#1a120a" text-anchor="middle" font-weight="700" opacity="0">Learn programming
          <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;0;1;1;0" keyTimes="0;0.35;0.45;0.7;0.9;1"/>
        </text>
      </g>

      <!-- Brief resize cue -->
      <line x1="360" y1="174" x2="360" y2="174" stroke="#9eb2d8" stroke-width="1.4" stroke-linecap="round" opacity="0">
        <animate attributeName="x1" dur="8s" repeatCount="indefinite" values="360;360;344;344;344;360" keyTimes="0;0.2;0.35;0.45;0.7;1"/>
        <animate attributeName="x2" dur="8s" repeatCount="indefinite" values="360;360;376;376;376;360" keyTimes="0;0.2;0.35;0.45;0.7;1"/>
        <animate attributeName="opacity" dur="8s" repeatCount="indefinite" values="0;0;1;0;0;0" keyTimes="0;0.2;0.35;0.45;0.7;1"/>
      </line>

      <!-- Chat bubbles beside monitor -->
      <rect x="24" y="122" width="150" height="70" fill="#ffffff" stroke="#cfd6e4" stroke-width="1.5" rx="6"/>
      <text x="34" y="144" font-family="'Nanum Gothic'" font-size="10" fill="#243042">I'll combine them</text>
      <text x="34" y="159" font-family="'Nanum Gothic'" font-size="10" fill="#243042">semantically as learn</text>
      <text x="34" y="174" font-family="'Nanum Gothic'" font-size="10" fill="#243042">programming</text>

      <rect x="40" y="204" width="120" height="40" fill="#ffffff" stroke="#cfd6e4" stroke-width="1.5" rx="6"/>
      <text x="52" y="228" font-family="'Nanum Gothic'" font-size="10" fill="#243042">I'll automate it.</text>

      <!-- Monitor stand -->
      <rect x="344" y="304" width="32" height="24" fill="#0e131e"/>
      <rect x="304" y="326" width="112" height="10" fill="#0e131e" rx="4"/>
    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg8" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0a1008"/>
          <stop offset="100%" stop-color="#060c05"/>
        </linearGradient>
        <linearGradient id="cardmatch" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0d1e0a"/>
          <stop offset="100%" stop-color="#0a1808"/>
        </linearGradient>
        <linearGradient id="holoStuA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#10283a"/>
          <stop offset="100%" stop-color="#0a1b2c"/>
        </linearGradient>
        <linearGradient id="holoStuB" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stop-color="#241a3a"/>
          <stop offset="100%" stop-color="#13112e"/>
        </linearGradient>
        <filter id="holoGlowStu">
          <feGaussianBlur stdDeviation="2.2" result="g"/>
          <feMerge>
            <feMergeNode in="g"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <rect width="720" height="360" fill="url(#bg8)"/>
      <ellipse cx="360" cy="240" rx="280" ry="180" fill="#2a8a2a" opacity="0.04"/>

      <!-- Student monitor with learn-programming split components -->
      <rect x="222" y="62" width="438" height="252" fill="#111" rx="7"/>
      <rect x="228" y="68" width="426" height="240" fill="#0f1a24" rx="5"/>
      <rect x="228" y="68" width="426" height="18" fill="#1e2e3e" rx="5"/>
      <circle cx="240" cy="77" r="3" fill="#ff5f57"/>
      <circle cx="250" cy="77" r="3" fill="#ffbd2e"/>
      <circle cx="260" cy="77" r="3" fill="#28c840"/>
      <text x="334" y="80" font-family="monospace" font-size="8" fill="#8ab4ff">learn-programming.ara — recommended components</text>
      <rect x="234" y="92" width="414" height="210" fill="#101820" rx="3"/>

      <rect x="246" y="104" width="192" height="186" fill="#050510" stroke="#25374f" stroke-width="1" rx="4"/>
      <rect x="444" y="104" width="192" height="186" fill="#070f08" stroke="#2b4f30" stroke-width="1" rx="4"/>
      <text x="342" y="119" font-family="monospace" font-size="7" fill="#7a9bd8" text-anchor="middle">learn programming window</text>
      <text x="342" y="136" font-family="monospace" font-size="7" fill="#6d82b4" text-anchor="middle">recommended components (student slide)</text>
      <text x="258" y="156" font-family="monospace" font-size="7" fill="#8aa9d8">- parser sync</text>
      <text x="258" y="172" font-family="monospace" font-size="7" fill="#8aa9d8">- tutorial pair mapping</text>
      <text x="258" y="188" font-family="monospace" font-size="7" fill="#8aa9d8">- semantic hints</text>
      <text x="540" y="119" font-family="monospace" font-size="7" fill="#78c878" text-anchor="middle">main.rs</text>
      <text x="454" y="140" font-family="monospace" font-size="7" fill="#7ab67a">fn apply_recommendations() {'{'}</text>
      <text x="462" y="158" font-family="monospace" font-size="7" fill="#7ab67a">use_same_tutorial_pair();</text>
      <text x="462" y="176" font-family="monospace" font-size="7" fill="#7ab67a">learn_programming_semantics();</text>
      <text x="454" y="194" font-family="monospace" font-size="7" fill="#7ab67a">{'}'}</text>
      <rect x="416" y="314" width="52" height="15" fill="#0e131e" rx="2"/>
      <rect x="392" y="329" width="100" height="9" fill="#0e131e" rx="3"/>

      <!-- Holographic recommendations inside monitor (teacher slide structure) -->
      <rect x="246" y="104" width="192" height="186" fill="#08141d" opacity="0.56" rx="4"/>
      <text x="258" y="118" font-family="monospace" font-size="7" fill="#8db5d6">NETWORK RECOMMENDATIONS</text>

      <!-- Recommendation 1 -->
      <rect x="254" y="126" width="176" height="74" fill="url(#holoStuA)" stroke="#3e7fc4" stroke-width="0.8" rx="4" opacity="0.76" filter="url(#holoGlowStu)">
        <animate attributeName="opacity" values="0.64;0.86;0.64" dur="2.4s" repeatCount="indefinite"/>
        <animate attributeName="y" values="126;124;126" dur="2.8s" repeatCount="indefinite"/>
      </rect>
      <rect x="255" y="131" width="174" height="6" fill="#8ad4ff" opacity="0.12">
        <animate attributeName="y" values="131;194;131" dur="2.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;0.22;0" dur="2.2s" repeatCount="indefinite"/>
      </rect>
      <rect x="262" y="134" width="90" height="12" fill="#0d1a2a" stroke="#2a4a6a" stroke-width="0.6" rx="6" opacity="0.85"/>
      <text x="307" y="143" font-family="monospace" font-size="7" fill="#9ec3ff" text-anchor="middle">AUTO-RESUME</text>
      <text x="264" y="162" font-family="'Nanum Gothic'" font-size="8.4" fill="#b6d2ff">auto resume, auto pause as you code</text>
      <text x="264" y="182" font-family="monospace" font-size="7" fill="#9ab9df">♥ 1,500 tutorial followers</text>

      <!-- Floating author avatar 1 -->
      <circle cx="134" cy="147" r="14" fill="#1e4369" stroke="#6aa5ff" stroke-width="1"/>
      <ellipse cx="134" cy="146" rx="6.8" ry="7.8" fill="#d2ad82"/>
      <path d="M 127 142 Q 134 136 141 142 Q 139 145 134 145 Q 129 145 127 142 Z" fill="#1a1408"/>
      <text x="152" y="142" font-family="monospace" font-size="5.8" fill="#aad5ff">author</text>
      <text x="152" y="150" font-family="monospace" font-size="5.8" fill="#aad5ff">USA</text>
      <text x="152" y="158" font-family="monospace" font-size="5.2" fill="#9ec3ea">same code editor,</text>
      <text x="152" y="165" font-family="monospace" font-size="5.2" fill="#9ec3ea">same tutorial</text>

      <!-- Recommendation 2 -->
      <rect x="254" y="208" width="176" height="78" fill="url(#holoStuB)" stroke="#756ac9" stroke-width="0.8" rx="4" opacity="0.74" filter="url(#holoGlowStu)">
        <animate attributeName="opacity" values="0.6;0.84;0.6" dur="2.7s" repeatCount="indefinite"/>
        <animate attributeName="y" values="208;206;208" dur="3.1s" repeatCount="indefinite"/>
      </rect>
      <rect x="255" y="214" width="174" height="7" fill="#b4adff" opacity="0.1">
        <animate attributeName="y" values="214;280;214" dur="2.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0;0.2;0" dur="2.6s" repeatCount="indefinite"/>
      </rect>
      <rect x="262" y="217" width="106" height="12" fill="#181338" stroke="#6660c7" stroke-width="0.6" rx="6" opacity="0.85"/>
      <text x="315" y="226" font-family="monospace" font-size="7" fill="#cbc8ff" text-anchor="middle">EMBEDDED-VIDEO</text>
      <text x="264" y="244" font-family="'Nanum Gothic'" font-size="8.2" fill="#d4d0ff">remove video entirely and show hints in code editor</text>
      <text x="264" y="266" font-family="monospace" font-size="6.8" fill="#b6b1ff">price: 1$ one time fee, used by 50 users</text>

      <!-- Floating author avatar 2 -->
      <circle cx="134" cy="233" r="14" fill="#322c6b" stroke="#a39bff" stroke-width="1"/>
      <ellipse cx="134" cy="232" rx="6.8" ry="7.8" fill="#d2ad82"/>
      <path d="M 127 228 Q 134 223 141 228 Q 139 232 134 231 Q 129 232 127 228 Z" fill="#1a1408"/>
      <text x="152" y="228" font-family="monospace" font-size="5.8" fill="#bdb7ff">author</text>
      <text x="152" y="236" font-family="monospace" font-size="5.8" fill="#bdb7ff">India</text>
      <text x="152" y="244" font-family="monospace" font-size="5.2" fill="#aaa3ef">same 'learn programming'</text>
      <text x="152" y="251" font-family="monospace" font-size="5.2" fill="#aaa3ef">semantics</text>

      <!-- Student head -->
      <ellipse cx="236" cy="322" rx="20" ry="23" fill="#c8a87a"/>
      <path d="M 216 314 Q 220 297 236 294 Q 252 297 256 314" fill="#1a1408"/>
      <ellipse cx="218" cy="323" rx="3" ry="4.5" fill="#b89060"/>
      <ellipse cx="231" cy="318" rx="3.8" ry="4.2" fill="white" stroke="#333" stroke-width="0.8"/>
      <ellipse cx="242" cy="318" rx="3.8" ry="4.2" fill="white" stroke="#333" stroke-width="0.8"/>
      <circle cx="232" cy="319" r="2.4" fill="#1a1408"/>
      <circle cx="243" cy="319" r="2.4" fill="#1a1408"/>
      <path d="M 228 329 Q 236 335 244 329" fill="#8a6a4a"/>
      <path d="M 218 314 Q 218 301 236 298 Q 254 301 254 314" fill="none" stroke="#3a4a5a" stroke-width="2.4" stroke-linecap="round"/>
      <rect x="214" y="312" width="5" height="9" fill="#2a3a4a" rx="2"/>

      <!-- Speech bubble -->
      <rect x="268" y="300" width="230" height="52" fill="#0a1a0a" stroke="#2a8a2a" stroke-width="1.8" rx="7"/>
      <path d="M 268 326 L 252 329 L 268 336 Z" fill="#0a1a0a" stroke="#2a8a2a" stroke-width="1.8"/>
      <text x="383" y="321" font-family="'Nanum Gothic'" font-size="10.5" fill="#4aff4a" text-anchor="middle" font-weight="700">Wow, someone faced it too?</text>
      <text x="383" y="338" font-family="'Nanum Gothic'" font-size="10.5" fill="#4a8a4a" text-anchor="middle">I'll use 'auto-resume'.</text>

    </svg>`},{bg:"panel-1",caption:"",html:`<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg9" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#080f0a"/>
          <stop offset="100%" stop-color="#050a06"/>
        </linearGradient>
      </defs>
      <rect width="720" height="340" fill="url(#bg9)"/>
      <!-- Soft green glow — everything working -->
      <ellipse cx="360" cy="260" rx="300" ry="180" fill="#2a8a2a" opacity="0.05"/>

      <!-- Screens side by side — both active, video playing -->
      <!-- Left - video playing smoothly -->
      <rect x="60" y="60" width="240" height="190" fill="#0a0a14" rx="4" stroke="#2a4a2a" stroke-width="1.5"/>
      <rect x="66" y="66" width="228" height="158" fill="#050510"/>
      <rect x="66" y="66" width="228" height="14" fill="#10101a" rx="3"/>
      <text x="180" y="77" font-family="monospace" font-size="7" fill="#3a6a3a" text-anchor="middle">▶ rust-tutorial.mp4 — PLAYING</text>
      <text x="110" y="108" font-family="monospace" font-size="8" fill="#4a8aff">fn main() {'{'}</text>
      <text x="122" y="122" font-family="monospace" font-size="8" fill="#8a4aff">let x = vec![];</text>
      <text x="122" y="136" font-family="monospace" font-size="8" fill="#4a8aff">println!("{:?}",</text>
      <text x="122" y="150" font-family="monospace" font-size="8" fill="#4a8aff">    x);</text>
      <text x="110" y="164" font-family="monospace" font-size="8" fill="#4a8aff">{'}'}</text>
      <!-- Progress bar advancing -->
      <rect x="70" y="206" width="228" height="6" fill="#1a1a2a" rx="2"/>
      <rect x="70" y="206" width="148" height="6" fill="#4aaa4a" rx="2"/>
      <!-- Agent badge on video -->
      <rect x="70" y="216" width="180" height="18" fill="#0a1a0a" stroke="#2a6a2a" stroke-width="1" rx="3"/>
      <circle cx="80" cy="225" r="3" fill="#4aff4a">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
      </circle>
      <text x="88" y="229" font-family="monospace" font-size="7" fill="#4aaa4a">agent: watching keypress…</text>

      <!-- Right - code editor, flowing -->
      <rect x="420" y="60" width="240" height="190" fill="#0a140a" rx="4" stroke="#2a4a2a" stroke-width="1.5"/>
      <rect x="426" y="66" width="228" height="158" fill="#080f08"/>
      <rect x="426" y="66" width="228" height="14" fill="#101a10" rx="3"/>
      <text x="540" y="77" font-family="monospace" font-size="7" fill="#3a6a3a" text-anchor="middle">main.rs — typing…</text>
      <text x="436" y="96" font-family="monospace" font-size="8" fill="#5a8a5a">use std::collections::HashMap;</text>
      <text x="436" y="110" font-family="monospace" font-size="8" fill="#3a6a3a">// ownership examples</text>
      <text x="436" y="124" font-family="monospace" font-size="8" fill="#5a8a5a">fn process(data: Vec&lt;i32&gt;) {'{'}</text>
      <text x="448" y="138" font-family="monospace" font-size="8" fill="#6aaa6a">let sum: i32 = data.iter()</text>
      <text x="448" y="152" font-family="monospace" font-size="8" fill="#6aaa6a">    .sum();</text>
      <text x="448" y="166" font-family="monospace" font-size="8" fill="#5a8a5a">println!("{}", sum);</text>
      <text x="436" y="180" font-family="monospace" font-size="8" fill="#5a8a5a">{'}'}</text>
      <!-- Cursor active -->
      <rect x="436" y="190" width="7" height="12" fill="#6aff6a">
        <animate attributeName="opacity" values="1;0;1" dur="0.8s" repeatCount="indefinite"/>
      </rect>

      <!-- Flow arrow between them -->
      <path d="M 310 155 Q 360 145 410 155" fill="none" stroke="#2a6a2a" stroke-width="2" stroke-dasharray="4 3"/>

      <!-- Programmer — scaled down and centered between windows -->
      <g transform="translate(120 -80) scale(0.68)">
        <ellipse cx="330" cy="500" rx="70" ry="18" fill="#000" opacity="0.4"/>
        <!-- Body leaned back slightly -->
        <rect x="286" y="340" width="88" height="130" fill="#2a3545" rx="10"/>
        <!-- Hood -->
        <path d="M 286 346 Q 305 320 330 316 Q 355 320 374 346" fill="#242e3e"/>
        <!-- Pocket -->
        <rect x="306" y="420" width="48" height="38" fill="#242e3e" rx="4"/>
        <!-- One arm raised in victory -->
        <rect x="256" y="310" width="32" height="75" fill="#2a3545" rx="8" transform="rotate(-20 272 350)"/>
        <ellipse cx="248" cy="372" rx="18" ry="14" fill="#b89060" transform="rotate(-20 252 375)"/>
        <!-- Other arm on desk -->
        <rect x="370" y="355" width="30" height="65" fill="#2a3545" rx="8"/>
        <ellipse cx="385" cy="422" rx="18" ry="12" fill="#b89060"/>
        <!-- Legs -->
        <rect x="298" y="450" width="22" height="55" fill="#1a1a2a" rx="4"/>
        <rect x="340" y="450" width="22" height="55" fill="#1a1a2a" rx="4"/>
        <ellipse cx="309" cy="506" rx="16" ry="7" fill="#0a0a0f"/>
        <ellipse cx="351" cy="506" rx="16" ry="7" fill="#0a0a0f"/>
        <!-- Head -->
        <ellipse cx="330" cy="290" rx="52" ry="55" fill="#c8a87a"/>
        <!-- Hair -->
        <path d="M 278 268 Q 288 212 330 204 Q 372 212 382 268" fill="#1a1408"/>
        <path d="M 278 272 Q 270 300 274 322" fill="#1a1408"/>
        <path d="M 382 272 Q 390 300 386 322" fill="#1a1408"/>
        <!-- Messy happy strands -->
        <path d="M 310 204 Q 306 184 314 178 Q 320 194 310 204 Z" fill="#1a1408"/>
        <path d="M 333 202 Q 336 180 344 183 Q 342 200 333 202 Z" fill="#1a1408"/>
        <!-- Ears -->
        <ellipse cx="279" cy="292" rx="10" ry="13" fill="#b89060"/>
        <ellipse cx="381" cy="292" rx="10" ry="13" fill="#b89060"/>
        <!-- Headphones relaxed down neck -->
        <path d="M 282 275 Q 282 235 330 228 Q 378 235 378 275" fill="none" stroke="#3a4a5a" stroke-width="8" stroke-linecap="round"/>
        <rect x="272" y="268" width="18" height="24" fill="#2a3a4a" rx="5"/>
        <rect x="370" y="268" width="18" height="24" fill="#2a3a4a" rx="5"/>
        <!-- Eyes — closed/content, smiling -->
        <path d="M 311 278 Q 320 284 329 278" fill="none" stroke="#6a4a2a" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M 331 278 Q 340 284 349 278" fill="none" stroke="#6a4a2a" stroke-width="2.5" stroke-linecap="round"/>
        <!-- Eyebrows relaxed -->
        <path d="M 309 268 Q 319 264 329 268" fill="none" stroke="#3a2a18" stroke-width="2" stroke-linecap="round"/>
        <path d="M 331 268 Q 341 264 351 268" fill="none" stroke="#3a2a18" stroke-width="2" stroke-linecap="round"/>
        <!-- Big grin -->
        <path d="M 310 310 Q 330 326 350 310" fill="#8a6a4a"/>
        <rect x="318" y="304" width="12" height="8" fill="white" rx="1"/>
        <rect x="332" y="304" width="12" height="8" fill="white" rx="1"/>
        <!-- Blush -->
        <ellipse cx="300" cy="302" rx="14" ry="8" fill="#e89a7a" opacity="0.25"/>
        <ellipse cx="360" cy="302" rx="14" ry="8" fill="#e89a7a" opacity="0.25"/>
        <!-- Victory hand with ✓ -->
        <text x="244" y="345" font-size="22" fill="#4aff4a">✓</text>
      </g>

      <!-- Chat bubble below user -->
      <rect x="270" y="264" width="180" height="36" fill="#0a1a0a" stroke="#2a8a2a" stroke-width="1.6" rx="8"/>
      <path d="M 340 254 L 330 264 L 355 264 Z" fill="#0a1a0a" stroke="#2a8a2a" stroke-width="1.6"/>
      <text x="360" y="287" font-family="'Nanum Gothic'" font-size="10.5" fill="#4aff4a" text-anchor="middle">smooth and focused learning</text>
    </svg>`}]}},d=document.querySelectorAll(".ara-main .reveal"),f=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("visible"),f.unobserve(e.target))})},{threshold:.1});d.forEach(t=>f.observe(t));const a=document.getElementById("comicOverlay"),l=document.getElementById("comicScroll"),h=document.getElementById("comicCloseBtn"),y=document.querySelectorAll("[data-comic-id]");let r="";const n=(t="")=>{const e=o[t];if(!e||!a||!l)return;r=t;const c=e.panels.map((i,p)=>`
        <div class="comic-panel ${i.bg}">
          <div class="panel-illustration">${i.html}</div>
          <div class="panel-text">
            <p class="panel-caption">${i.caption}</p>
          </div>
        </div>
      `).join(""),x=t==="teacher"?`<div class="comic-footer-nav show-next" style="display:flex;justify-content:center;padding:1.25rem 1.2rem 1.6rem;background:#000;">
               <button class="comic-next-btn" id="comicNextBtn" type="button" style="appearance:none;border:1px solid #4bb18b;background:#1f6f55;color:#e7fff5;font-family:'DM Mono',monospace;font-size:0.72rem;letter-spacing:0.11em;text-transform:uppercase;padding:0.75rem 1.3rem;cursor:pointer;">
                 Next Example
               </button>
             </div>`:"";l.innerHTML=c+x,l.scrollTop=0,a.classList.add("open"),document.body.style.overflow="hidden",document.getElementById("comicNextBtn")?.addEventListener("click",()=>{if(r!=="teacher")return;const i=o.student?"student":"programmer";n(i)})},s=()=>{a&&(a.classList.remove("open"),r="",document.body.style.overflow="")};y.forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-comic-id");e&&n(e)})});h?.addEventListener("click",s);document.addEventListener("keydown",t=>{t.key==="Escape"&&s()});
