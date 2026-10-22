const home_page = document.querySelector(".home-page");
const page_one = document.querySelector(".page-one");
const page_two = document.querySelector(".page-two");

const bahar_page = document.querySelector(".bahar-page");

const new_goals = document.querySelector(".new-goals");
const my_goals = document.querySelector(".my-goals");
const back_home_page_one = document.querySelector(".back-home-page-one");
const back_home_page_tow = document.querySelector(".back-home-page-tow");

// صفحه اهداف جدید
new_goals.addEventListener("click", () => {
  home_page.classList.remove("active");
  page_one.classList.add("active");

  localStorage.setItem("page-one", "yes");
});

const currentPage_page_one = localStorage.getItem("page-one");

if (currentPage_page_one === "yes") {
  page_one.classList.add("active");
  home_page.classList.remove("active");
}

back_home_page_one.addEventListener("click", () => {
  home_page.classList.add("active");
  page_one.classList.remove("active");

  localStorage.removeItem("page-one");
});

// انتخاب فصل اهداف
const btn_select_bahar = document.querySelector(".btn-select-bahar");

btn_select_bahar.addEventListener("click", () => {
  page_one.classList.remove("active");
  bahar_page.classList.add("active");
  page_two.classList.remove("active");

  localStorage.setItem("bahar-page", "yes");
  localStorage.removeItem("page-one");
});

const currentPage_bahar = localStorage.getItem("bahar-page");

if (currentPage_bahar === "yes") {
  bahar_page.classList.add("active");
  home_page.classList.remove("active");
}

//***فصل بهار

const back_home_page_bahar = document.querySelector(".back-home-page-bahar");

const guide_btn = document.querySelector(".guide-btn");
const guide = document.querySelector(".guide");
const Close_Guide = document.querySelector(".Close-Guide");

back_home_page_bahar.addEventListener("click", () => {
  bahar_page.classList.remove("active");
  home_page.classList.add("active");

  localStorage.removeItem("bahar-page");
});

guide_btn.addEventListener("click", () => {
  guide.classList.add("active");
});

Close_Guide.addEventListener("click", () => {
  guide.classList.remove("active");
});

const goals_input = document.querySelector(".goals-input");
const goals_btn = document.querySelector(".goals-btn");
const cnt_goal_bahar = document.querySelector(".cnt-goal-bahar");
let error_showing = false;

const Set_Goal = document.querySelector(".Set-Goal");
const Set_Goal_exit = document.querySelector(".Set-Goal-exit");
const Set_Goal_exit_btn = document.querySelector(".Set-Goal-exit-btn");
const edit_btn = document.querySelector(".edit-btn");

goals_btn.addEventListener("click", () => {
  const goals_input_value = goals_input.value;

  const value_bahar = goals_input.value.trim();
  const goals_bahar = cnt_goal_bahar.querySelectorAll(".goal-bahar");

  goals_input.value = "";

  if (goals_input_value.trim() !== "") {
    if (cnt_goal_bahar.children.length >= 10) {
      if (error_showing) {
        return;
      }

      const Error_message_bahar_div = document.createElement("div");
      const Error_message_bahar_div_text = document.createElement("h4");

      Error_message_bahar_div_text.textContent = "حداکثر 10 هدف انتتخاب کنید.";
      Error_message_bahar_div.classList.add("Error-message-bahar");

      cnt_goal_bahar.append(Error_message_bahar_div);
      Error_message_bahar_div.append(Error_message_bahar_div_text);

      error_showing = true;

      setTimeout(() => {
        Error_message_bahar_div.remove();
        error_showing = false;
      }, 4000);

      return;
    }

    for (const goal_text of goals_bahar) {
      if (goal_text.textContent === value_bahar) {
        if (error_showing) {
          return;
        }

        const Error_message_bahar_Set_Goal = document.createElement("div");
        const Error_message_bahar_Set_Goal_text = document.createElement("h4");

        Error_message_bahar_Set_Goal_text.textContent =
          "لطفا اهداف تکراری وارد ننمایید.";
        Error_message_bahar_Set_Goal.classList.add("Error-message-bahar");

        cnt_goal_bahar.append(Error_message_bahar_Set_Goal);
        Error_message_bahar_Set_Goal.append(Error_message_bahar_Set_Goal_text);

        error_showing = true;

        setTimeout(() => {
          Error_message_bahar_Set_Goal.remove();
          error_showing = false;
        }, 4000);

        return;
      }
    }

    const goal = document.createElement("div");
    const goal_text = document.createElement("h4");
    const icon = document.createElement("i");

    goal_text.textContent = goals_input_value;
    goal.classList.add("goal-bahar");
    icon.classList.add("fa-solid", "fa-xmark", "btn-delet-goal");

    cnt_goal_bahar.append(goal);
    goal.append(goal_text, icon);

    icon.addEventListener("click", () => {
      goal.remove();
    });

    Set_Goal_exit_btn.addEventListener("click", () => {
      goal.remove();
    });
  } else {
    if (error_showing) {
      return;
    }

    const Error_message_bahar = document.createElement("div");
    const Error_message_bahar_text = document.createElement("h4");

    Error_message_bahar_text.textContent = "لطفا اهداف خود را وارد کنید.";
    Error_message_bahar.classList.add("Error-message-bahar");

    cnt_goal_bahar.append(Error_message_bahar);
    Error_message_bahar.append(Error_message_bahar_text);

    error_showing = true;

    setTimeout(() => {
      Error_message_bahar.remove();
      error_showing = false;
    }, 4000);
  }
});

Set_Goal.addEventListener("click", () => {
  if (cnt_goal_bahar.children.length >= 1) {
    const goals_bahar = cnt_goal_bahar.querySelectorAll(".goal-bahar");

    if (goals_bahar.length < 1) {
      return;
    }

    Set_Goal_exit.classList.add("active");
  } else {
    if (error_showing) {
      return;
    }

    const Error_message_bahar_Set_Goal_btn = document.createElement("div");
    const Error_message_bahar_Set_Goal_btn_text = document.createElement("h4");

    Error_message_bahar_Set_Goal_btn_text.textContent =
      "حداقال یک هدف وارد نمایید.";
    Error_message_bahar_Set_Goal_btn.classList.add("Error-message-bahar");

    cnt_goal_bahar.append(Error_message_bahar_Set_Goal_btn);
    Error_message_bahar_Set_Goal_btn.append(
      Error_message_bahar_Set_Goal_btn_text,
    );

    error_showing = true;

    setTimeout(() => {
      Error_message_bahar_Set_Goal_btn.remove();
      error_showing = false;
    }, 4000);
  }
});

edit_btn.addEventListener("click", () => {
  Set_Goal_exit.classList.remove("active");
});

Set_Goal_exit_btn.addEventListener("click", () => {
  if (cnt_goal_bahar.children.length >= 1) {
    const goals_bahar = cnt_goal_bahar.querySelectorAll(".goal-bahar");
    if (goals_bahar.length < 1) {
      return;
    }
    const bahar_goal_array = [];
    for (const goal_text of goals_bahar) {
      bahar_goal_array.push(goal_text.textContent);
    }
    localStorage.setItem(bahar_key, JSON.stringify(bahar_goal_array));

    bahar_page.classList.remove("active");
    home_page.classList.add("active");
    Set_Goal_exit.classList.remove("active");

    localStorage.removeItem("bahar-page");
  }
});

// ******** صفحه اهداف قبلی

// گرفتن سال و ماه شمسی فعلی
const date_parts = new Intl.DateTimeFormat("en-US-u-ca-persian", {
  year: "numeric",
  month: "numeric",
}).formatToParts(new Date());

const year = Number(date_parts.find((part) => part.type === "year").value);

const month = Number(date_parts.find((part) => part.type === "month").value);

const bahar_key = `baharGoals-${year}`;

const text_no_goals = document.querySelector(".text-no-goals");
const cnt_my_goals = document.querySelector(".cnt-my-goals");

const bahar_list_goal = document.querySelector(".bahar-list-goal");
const back_home_page_list_bahar = document.querySelector(
  ".back-home-page-list-bahar",
);

my_goals.addEventListener("click", () => {
  home_page.classList.remove("active");
  page_two.classList.add("active");

  localStorage.setItem("page-two", "yes");
});

// ساخت کارت اهداف بهار برای تمام سال‌های ذخیره‌شده
const bahar_keys = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (key && /^baharGoals-\d+$/.test(key)) {
    bahar_keys.push(key);
  }
}

bahar_keys.sort((a, b) => {
  return Number(b.split("-")[1]) - Number(a.split("-")[1]);
});

for (const key of bahar_keys) {
  const goal_year = Number(key.split("-")[1]);

  const cnt_my_goals_bahar = document.createElement("div");
  const cnt_text_goals_bahar = document.createElement("div");
  const image_bahar = document.createElement("img");
  const title_bahar = document.createElement("h3");
  const text_bahar = document.createElement("p");

  const btn_my_goals_bahar = document.createElement("div");
  const text_btn_my_goals_bahar = document.createElement("a");
  const icon_bahar = document.createElement("i");

  cnt_my_goals.append(cnt_my_goals_bahar);
  cnt_my_goals_bahar.append(image_bahar, cnt_text_goals_bahar);
  cnt_text_goals_bahar.append(title_bahar, text_bahar, btn_my_goals_bahar);
  btn_my_goals_bahar.append(text_btn_my_goals_bahar, icon_bahar);

  cnt_my_goals_bahar.classList.add("cnt-my-goals-bahar");
  btn_my_goals_bahar.classList.add("btn-my-goals-bahar");
  cnt_text_goals_bahar.classList.add("cnt-text-goals-bahar");

  image_bahar.src = "../img/بهار.png";
  title_bahar.textContent = "بهار";
  text_bahar.textContent = `فروردین ${goal_year} - خرداد ${goal_year}`;
  text_btn_my_goals_bahar.textContent = "لیست اهداف";
  icon_bahar.classList.add("fa-solid", "fa-arrow-right");

  btn_my_goals_bahar.addEventListener("click", () => {
    localStorage.setItem("selected-bahar-year", String(goal_year));

    showBaharGoals(goal_year);

    bahar_list_goal.classList.add("active");
    page_two.classList.remove("active");

    localStorage.removeItem("page-two");
    localStorage.setItem("list-bahar", "yes");
  });
}

const all_season_keys = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (
    key &&
    /^(baharGoals|summerGoals|autumnGoals|winterGoals)-\d+$/.test(key)
  ) {
    all_season_keys.push(key);
  }
}

if (all_season_keys.length === 0) {
  text_no_goals.classList.add("active");
} else {
  text_no_goals.classList.remove("active");
}

const currentPage_two = localStorage.getItem("page-two");
const currentPage_list_bahar = localStorage.getItem("list-bahar");

if (currentPage_two === "yes") {
  page_two.classList.add("active");
  home_page.classList.remove("active");
}

back_home_page_tow.addEventListener("click", () => {
  home_page.classList.add("active");
  page_two.classList.remove("active");

  localStorage.removeItem("page-two");
});

const new_goal_page_two = document.querySelector(".new-goal-page-two");

new_goal_page_two.addEventListener("click", () => {
  home_page.classList.remove("active");
  page_two.classList.remove("active");
  page_one.classList.add("active");

  localStorage.removeItem("page-two");
  localStorage.setItem("page-one", "yes");
});

const cnt_goal_bahar_edit = document.querySelector(".cnt-goal-bahar-end-edit");

// بخش تنظیمات

const seting_btn = document.querySelector(".seting-icon");
const seting = document.querySelector(".seting");
const Close_seting = document.querySelector(".Close-seting");

const remove_all_goal = document.querySelector(".remove-all-goal");
const trash_goal_icon = document.querySelector(".trash-goal-icon");

seting_btn.addEventListener("click", () => {
  seting.classList.add("active");
});

Close_seting.addEventListener("click", () => {
  seting.classList.remove("active");
});

remove_all_goal.addEventListener("click", () => {
  const keys_to_remove = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (
      key &&
      /^(baharGoals|summerGoals|autumnGoals|winterGoals|baharStatus|summerStatus|autumnStatus|winterStatus)-\d+$/.test(
        key,
      )
    ) {
      keys_to_remove.push(key);
    }
  }

  for (const key of keys_to_remove) {
    localStorage.removeItem(key);
  }

  // حذف کلیدهای مربوط به صفحات و وضعیت ثبت
  const other_keys = [
    "selected-bahar-year",
    "selected-summer-year",
    "selected-autumn-year",
    "selected-winter-year",
    "list-bahar",
    "list-summer",
    "list-autumn",
    "list-winter",
    "Status_goal_btn_cnt",
    "Status_goal_btn_cnt_summer",
    "Status_goal_btn_cnt_autumn",
    "Status_goal_btn_cnt_winter",
    "Which-month",
  ];

  for (const key of other_keys) {
    localStorage.removeItem(key);
  }

  cnt_my_goals.innerHTML = "";
  text_no_goals.classList.add("active");
  seting.classList.remove("active");
});

trash_goal_icon.addEventListener("click", () => {
  trash_goal_icon.classList.remove("active");
  remove_all_goal.classList.add("active");
});

document.addEventListener("click", (event) => {
  if (
    !remove_all_goal.contains(event.target) &&
    !trash_goal_icon.contains(event.target)
  ) {
    remove_all_goal.classList.remove("active");
    trash_goal_icon.classList.add("active");
  }
});

// **بخش لیست اهداف بهار
const year_list = document.querySelector(".year-list");
const Status_goal_btn = localStorage.getItem("Status_goal_btn_cnt");

let completed_goal_bahar;
let not_completed_goal_bahar;
let btn_goal_bahar_completed;
let goal_status = {};
let status_key = "";

function showBaharGoals(selected_year) {
  cnt_goal_bahar_edit.innerHTML = "";

  year_list.textContent = selected_year;

  const selected_key = `baharGoals-${selected_year}`;

  const bahar_goal_array = JSON.parse(localStorage.getItem(selected_key)) || [];

  status_key = `baharStatus-${selected_year}`;
  goal_status = JSON.parse(localStorage.getItem(status_key)) || {};

  for (const bahar_goals_edit_end of bahar_goal_array) {
    const goal_bahar_cnt_edit = document.createElement("div");
    btn_goal_bahar_completed = document.createElement("div");
    const goal_bahar_title = document.createElement("h3");
    completed_goal_bahar = document.createElement("i");
    not_completed_goal_bahar = document.createElement("i");
    const compleated_goal = document.createElement("h4");
    const not_compleated_goal = document.createElement("h4");
    const unknown_goal = document.createElement("h4");

    goal_bahar_title.textContent = bahar_goals_edit_end;

    goal_bahar_cnt_edit.classList.add("goal-bahar-cnt-edit");
    btn_goal_bahar_completed.classList.add("btn-completed", "active");

    completed_goal_bahar.classList.add(
      "completed-goal-bahar",
      "fa-solid",
      "fa-check",
    );

    not_completed_goal_bahar.classList.add(
      "not-completed-goal-bahar",
      "fa-solid",
      "fa-xmark",
    );

    compleated_goal.textContent = "انجام شد";
    not_compleated_goal.textContent = "انجام نشد";
    unknown_goal.textContent = "نامشخص";

    compleated_goal.classList.add("compleated-goal");
    not_compleated_goal.classList.add("not-compleated-goal");
    unknown_goal.classList.add("unknown-goal");

    if (goal_status[bahar_goals_edit_end] === true) {
      compleated_goal.classList.add("active");
    } else if (goal_status[bahar_goals_edit_end] === false) {
      not_compleated_goal.classList.add("active");
    } else if (localStorage.getItem(status_key) !== null) {
      unknown_goal.classList.add("active");
    }

    if (Status_goal_btn === "compleate") {
      btn_goal_bahar_completed.classList.remove("active");
    }

    cnt_goal_bahar_edit.append(goal_bahar_cnt_edit);

    goal_bahar_cnt_edit.append(
      goal_bahar_title,
      btn_goal_bahar_completed,
      compleated_goal,
      not_compleated_goal,
      unknown_goal,
    );

    btn_goal_bahar_completed.append(
      completed_goal_bahar,
      not_completed_goal_bahar,
    );

    const completed = completed_goal_bahar;
    const not_completed = not_completed_goal_bahar;
    const goal_name = bahar_goals_edit_end;

    // دکمه انجام شد
    completed.addEventListener("click", () => {
      goal_status[goal_name] = true;

      completed.classList.toggle("change-color");
      not_completed.classList.remove("change-color");
    });

    // دکمه انجام نشد
    not_completed.addEventListener("click", () => {
      goal_status[goal_name] = false;

      not_completed.classList.toggle("change-color");
      completed.classList.remove("change-color");
    });
  }
}

if (currentPage_list_bahar === "yes") {
  const selected_year = Number(localStorage.getItem("selected-bahar-year"));

  if (selected_year && localStorage.getItem(`baharGoals-${selected_year}`)) {
    showBaharGoals(selected_year);

    bahar_list_goal.classList.add("active");
    home_page.classList.remove("active");
  } else {
    localStorage.removeItem("list-bahar");
  }
}

back_home_page_list_bahar.addEventListener("click", () => {
  home_page.classList.add("active");
  bahar_list_goal.classList.remove("active");

  localStorage.removeItem("list-bahar");
});

// بخش ثبت وضعیت اهداف
const Set_Status = document.querySelector(".Set-Status");
const Set_Status_exit = document.querySelector(".Set-Status-exit");
const Set_Status_exit_btn = document.querySelector(".Set-Status-exit-btn");
const edit_btn_Status = document.querySelector(".edit-btn-Status");
const title_goal_bahar = document.querySelector(".title-goal-bahar");
const bahar_title_selector = localStorage.getItem("Status_goal_btn_cnt");
const back_endpage_goal_bahar = document.querySelector(
  ".back-end-page-goal-bahar",
);

Set_Status.addEventListener("click", () => {
  Set_Status_exit.classList.add("active");
});

edit_btn_Status.addEventListener("click", () => {
  Set_Status_exit.classList.remove("active");
});

Set_Status_exit_btn.addEventListener("click", () => {
  localStorage.setItem(status_key, JSON.stringify(goal_status));

  home_page.classList.add("active");
  bahar_list_goal.classList.remove("active");

  localStorage.removeItem("list-bahar");
  localStorage.setItem("Status_goal_btn_cnt", "compleate");
});

back_endpage_goal_bahar.addEventListener("click", () => {
  page_two.classList.add("active");
  bahar_list_goal.classList.remove("active");

  localStorage.removeItem("list-bahar");
});

if (bahar_title_selector === "compleate") {
  title_goal_bahar.textContent = "";
  Set_Status.classList.remove("active");
  back_endpage_goal_bahar.classList.add("active");
}

// محدود کردن ثبت دوباره
const bahar_lock_layer = document.querySelector(".bahar-lock-layer");

if (month > 3 || localStorage.getItem(bahar_key) !== null) {
  bahar_lock_layer.classList.remove("hidden");
} else {
  bahar_lock_layer.classList.add("hidden");
}
/* =================================
   صفحه تابستان
================================= */

const summer_page = document.querySelector(".summer-page");
const btn_select_summer = document.querySelector(".btn-select-summer");
const back_home_page_summer = document.querySelector(".back-home-page-summer");

btn_select_summer.addEventListener("click", () => {
  page_one.classList.remove("active");
  summer_page.classList.add("active");
  page_two.classList.remove("active");

  localStorage.setItem("summer-page", "yes");
  localStorage.removeItem("page-one");
});

const currentPage_summer = localStorage.getItem("summer-page");

if (currentPage_summer === "yes") {
  summer_page.classList.add("active");
  home_page.classList.remove("active");
}

back_home_page_summer.addEventListener("click", () => {
  summer_page.classList.remove("active");
  page_two.classList.remove("active");

  localStorage.removeItem("summer-page");
});

// راهنما
const summer_guide_btn = document.querySelector(".summer-guide-btn");
const summer_guide = document.querySelector(".summer-guide");
const summer_close_guide = document.querySelector(".summer-close-guide");

summer_guide_btn.addEventListener("click", () => {
  summer_guide.classList.add("active");
});

summer_close_guide.addEventListener("click", () => {
  summer_guide.classList.remove("active");
});

// افزودن هدف

const summer_goals_btn = document.querySelector(".summer-goals-btn");
const summer_goals_input = document.querySelector(".summer-goals-input");
const cnt_goal_summer = document.querySelector(".cnt-goal-summer");

const summer_Set_Goal = document.querySelector(".summer-set-goal");
const summer_Set_Goal_exit = document.querySelector(".summer-set-goal-exit");
const summer_Set_Goal_exit_btn = document.querySelector(
  ".summer-set-goal-exit-btn",
);
const summer_edit_btn = document.querySelector(".summer-edit-btn");

let summer_error_showing = false;

summer_goals_btn.addEventListener("click", () => {
  const goals_input_value = summer_goals_input.value;
  const value_summer = summer_goals_input.value.trim();
  const goals_summer = cnt_goal_summer.querySelectorAll(".goal-bahar");

  summer_goals_input.value = "";

  if (goals_input_value.trim() !== "") {
    // حداکثر 10 هدف
    if (goals_summer.length >= 10) {
      if (summer_error_showing) return;

      const Error_message_summer_div = document.createElement("div");
      const Error_message_summer_div_text = document.createElement("h4");

      Error_message_summer_div_text.textContent = "حداکثر 10 هدف انتخاب کنید.";

      Error_message_summer_div.classList.add("Error-message-bahar");

      cnt_goal_summer.append(Error_message_summer_div);
      Error_message_summer_div.append(Error_message_summer_div_text);

      summer_error_showing = true;

      setTimeout(() => {
        Error_message_summer_div.remove();
        summer_error_showing = false;
      }, 4000);

      return;
    }

    // جلوگیری از هدف تکراری
    for (const goal_text of goals_summer) {
      if (goal_text.querySelector("h4").textContent.trim() === value_summer) {
        if (summer_error_showing) return;

        const Error_message_summer_Set_Goal = document.createElement("div");
        const Error_message_summer_Set_Goal_text = document.createElement("h4");

        Error_message_summer_Set_Goal_text.textContent =
          "لطفا اهداف تکراری وارد ننمایید.";

        Error_message_summer_Set_Goal.classList.add("Error-message-bahar");

        cnt_goal_summer.append(Error_message_summer_Set_Goal);
        Error_message_summer_Set_Goal.append(
          Error_message_summer_Set_Goal_text,
        );

        summer_error_showing = true;

        setTimeout(() => {
          Error_message_summer_Set_Goal.remove();
          summer_error_showing = false;
        }, 4000);

        return;
      }
    }

    // ساخت هدف
    const goal = document.createElement("div");
    const goal_text = document.createElement("h4");
    const icon = document.createElement("i");

    goal_text.textContent = value_summer;

    goal.classList.add("goal-bahar");

    icon.classList.add("fa-solid", "fa-xmark", "btn-delete-goal-bahar");

    cnt_goal_summer.append(goal);
    goal.append(goal_text, icon);

    // حذف هدف
    icon.addEventListener("click", () => {
      goal.remove();
    });
  } else {
    // هدف خالی
    if (summer_error_showing) return;

    const Error_message_summer = document.createElement("div");
    const Error_message_summer_text = document.createElement("h4");

    Error_message_summer_text.textContent = "لطفا اهداف خود را وارد کنید.";

    Error_message_summer.classList.add("Error-message-bahar");

    cnt_goal_summer.append(Error_message_summer);
    Error_message_summer.append(Error_message_summer_text);

    summer_error_showing = true;

    setTimeout(() => {
      Error_message_summer.remove();
      summer_error_showing = false;
    }, 4000);
  }
});

summer_Set_Goal.addEventListener("click", () => {
  const goals_summer = cnt_goal_summer.querySelectorAll(".goal-bahar");

  if (goals_summer.length >= 1) {
    summer_Set_Goal_exit.classList.add("active");
  } else {
    if (summer_error_showing) return;

    const Error_message_summer_Set_Goal_btn = document.createElement("div");
    const Error_message_summer_Set_Goal_btn_text = document.createElement("h4");

    Error_message_summer_Set_Goal_btn_text.textContent =
      "حداقل یک هدف وارد نمایید.";

    Error_message_summer_Set_Goal_btn.classList.add("Error-message-bahar");

    cnt_goal_summer.append(Error_message_summer_Set_Goal_btn);
    Error_message_summer_Set_Goal_btn.append(
      Error_message_summer_Set_Goal_btn_text,
    );

    summer_error_showing = true;

    setTimeout(() => {
      Error_message_summer_Set_Goal_btn.remove();
      summer_error_showing = false;
    }, 4000);
  }
});

summer_edit_btn.addEventListener("click", () => {
  summer_Set_Goal_exit.classList.remove("active");
});

summer_Set_Goal_exit_btn.addEventListener("click", () => {
  if (cnt_goal_summer.children.length >= 1) {
    const goals_summer = cnt_goal_summer.querySelectorAll(".goal-bahar");
    if (goals_summer.length < 1) {
      return;
    }
    const summer_goal_array = [];
    for (const goal_text of goals_summer) {
      summer_goal_array.push(goal_text.textContent);
    }

    localStorage.setItem(summer_key, JSON.stringify(summer_goal_array));

    summer_page.classList.remove("active");
    home_page.classList.add("active");
    summer_Set_Goal_exit.classList.remove("active");

    localStorage.removeItem("summer-page");
  }
});

const summer_key = `summerGoals-${year}`;
const summer_list_goal = document.querySelector(".summer-list-goal");

// صفحه لیست اهداف
const summer_keys = [];
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (key && /^summerGoals-\d+$/.test(key)) {
    summer_keys.push(key);
  }
}

summer_keys.sort((a, b) => {
  return Number(b.split("-")[1]) - Number(a.split("-")[1]);
});

for (const key of summer_keys) {
  const goal_year = Number(key.split("-")[1]);

  const cnt_my_goals_summer = document.createElement("div");
  const cnt_text_goals_summer = document.createElement("div");
  const image_summer = document.createElement("img");
  const title_summer = document.createElement("h3");
  const text_summer = document.createElement("p");

  const btn_my_goals_summer = document.createElement("div");
  const text_btn_my_goals_summer = document.createElement("a");
  const icon_summer = document.createElement("i");

  cnt_my_goals.append(cnt_my_goals_summer);
  cnt_my_goals_summer.append(image_summer, cnt_text_goals_summer);
  cnt_text_goals_summer.append(title_summer, text_summer, btn_my_goals_summer);
  btn_my_goals_summer.append(text_btn_my_goals_summer, icon_summer);

  cnt_my_goals_summer.classList.add("cnt-my-goals-summer");
  btn_my_goals_summer.classList.add("btn-my-goals-summer");
  cnt_text_goals_summer.classList.add("cnt-text-goals-summer");

  image_summer.src = "../img/تابستان.png";
  title_summer.textContent = "تابستان";
  text_summer.textContent = `تیر ${goal_year} - شهریور ${goal_year}`;
  text_btn_my_goals_summer.textContent = "لیست اهداف";
  icon_summer.classList.add("fa-solid", "fa-arrow-right");

  btn_my_goals_summer.addEventListener("click", () => {
    localStorage.setItem("selected-summer-year", String(goal_year));

    showSummerGoals(goal_year);

    summer_list_goal.classList.add("active");
    page_two.classList.remove("active");

    localStorage.removeItem("page-two");
    localStorage.setItem("list-summer", "yes");
  });
}

// لیست اهداف تابستان

const year_list_summer = document.querySelector(".year-list-summer");

const cnt_goal_summer_edit = document.querySelector(
  ".cnt-goal-summer-end-edit",
);
const back_home_page_list_summer = document.querySelector(
  ".back-home-page-list-summer",
);
const currentPage_list_summer = localStorage.getItem("list-summer");

let completed_goal_summer;
let not_completed_goal_summer;
let btn_goal_summer_completed;
let goal_status_summer = {};
let status_key_summer = "";

function showSummerGoals(selected_year) {
  cnt_goal_summer_edit.innerHTML = "";

  year_list_summer.textContent = selected_year;

  const selected_key = `summerGoals-${selected_year}`;

  const summer_goal_array =
    JSON.parse(localStorage.getItem(selected_key)) || [];

  status_key_summer = `summerStatus-${selected_year}`;
  goal_status_summer =
    JSON.parse(localStorage.getItem(status_key_summer)) || {};

  for (const summer_goals_edit_end of summer_goal_array) {
    const Status_goal_btn_summer = localStorage.getItem(
      "Status_goal_btn_cnt_summer",
    );
    const goal_summer_cnt_edit = document.createElement("div");
    btn_goal_summer_completed = document.createElement("div");
    const goal_summer_title = document.createElement("h3");

    completed_goal_summer = document.createElement("i");
    not_completed_goal_summer = document.createElement("i");

    const compleated_goal_summer = document.createElement("h4");
    const not_compleated_goal_summer = document.createElement("h4");
    const unknown_goal_summer = document.createElement("h4");

    goal_summer_title.textContent = summer_goals_edit_end;

    goal_summer_cnt_edit.classList.add("goal-summer-cnt-edit");

    btn_goal_summer_completed.classList.add("btn-completed-summer", "active");

    completed_goal_summer.classList.add(
      "completed-goal-summer",
      "fa-solid",
      "fa-check",
    );

    not_completed_goal_summer.classList.add(
      "not-completed-goal-summer",
      "fa-solid",
      "fa-xmark",
    );

    compleated_goal_summer.textContent = "انجام شد";
    not_compleated_goal_summer.textContent = "انجام نشد";
    unknown_goal_summer.textContent = "نامشخص";

    compleated_goal_summer.classList.add("compleated-goal-summer");
    not_compleated_goal_summer.classList.add("not-compleated-goal-summer-text");
    unknown_goal_summer.classList.add("unknown-goal-summer");

    if (goal_status_summer[summer_goals_edit_end] === true) {
      compleated_goal_summer.classList.add("active");
    } else if (goal_status_summer[summer_goals_edit_end] === false) {
      not_compleated_goal_summer.classList.add("active");
    } else if (localStorage.getItem(status_key_summer) !== null) {
      unknown_goal_summer.classList.add("active");
    }

    if (Status_goal_btn_summer === "compleate") {
      btn_goal_summer_completed.classList.remove("active");
    }

    cnt_goal_summer_edit.append(goal_summer_cnt_edit);

    goal_summer_cnt_edit.append(
      goal_summer_title,
      btn_goal_summer_completed,
      compleated_goal_summer,
      not_compleated_goal_summer,
      unknown_goal_summer,
    );

    btn_goal_summer_completed.append(
      completed_goal_summer,
      not_completed_goal_summer,
    );

    const completed = completed_goal_summer;
    const not_completed = not_completed_goal_summer;
    const goal_name = summer_goals_edit_end;

    // دکمه انجام شد
    completed.addEventListener("click", () => {
      goal_status_summer[goal_name] = true;

      completed.classList.toggle("change-color");
      not_completed.classList.remove("change-color");
    });

    // دکمه انجام نشد
    not_completed.addEventListener("click", () => {
      goal_status_summer[goal_name] = false;

      not_completed.classList.toggle("change-color");
      completed.classList.remove("change-color");
    });
  }
}

if (currentPage_list_summer === "yes") {
  const selected_year = Number(localStorage.getItem("selected-summer-year"));

  if (selected_year && localStorage.getItem(`summerGoals-${selected_year}`)) {
    showSummerGoals(selected_year);

    summer_list_goal.classList.add("active");
    home_page.classList.remove("active");
  } else {
    localStorage.removeItem("list-summer");
  }
}

back_home_page_list_summer.addEventListener("click", () => {
  home_page.classList.add("active");
  summer_list_goal.classList.remove("active");

  localStorage.removeItem("list-summer");
});

// بخش ثبت وضعیت اهداف تابستان

const Set_Status_summer = document.querySelector(".Set-Status-Summer");

const Set_Status_exit_summer = document.querySelector(
  ".Set-Status-exit-summer",
);

const Set_Status_exit_btn_summer = document.querySelector(
  ".Set-Status-exit-btn-summer",
);

const edit_btn_Status_summer = document.querySelector(
  ".edit-btn-Status-summer",
);

const title_goal_summer = document.querySelector(".title-goal-summer");

const summer_title_selector = localStorage.getItem(
  "Status_goal_btn_cnt_summer",
);

const back_endpage_goal_summer = document.querySelector(
  ".back-end-page-goal-summer",
);

// باز کردن پنجره تأیید
Set_Status_summer.addEventListener("click", () => {
  Set_Status_exit_summer.classList.add("active");
});

// ویرایش وضعیت‌ها
edit_btn_Status_summer.addEventListener("click", () => {
  Set_Status_exit_summer.classList.remove("active");
});

// ثبت نهایی وضعیت اهداف تابستان
Set_Status_exit_btn_summer.addEventListener("click", () => {
  localStorage.setItem(status_key_summer, JSON.stringify(goal_status_summer));

  localStorage.setItem("Status_goal_btn_cnt_summer", "compleate");

  home_page.classList.add("active");
  summer_list_goal.classList.remove("active");
  Set_Status_exit_summer.classList.remove("active");

  localStorage.removeItem("list-summer");
});

// برگشت به لیست فصل‌ها
back_endpage_goal_summer.addEventListener("click", () => {
  page_two.classList.add("active");
  summer_list_goal.classList.remove("active");

  localStorage.removeItem("list-summer");
});

// بررسی ثبت قبلی وضعیت اهداف تابستان
if (summer_title_selector === "compleate") {
  title_goal_summer.textContent = "";

  Set_Status_summer.classList.remove("active");
  back_endpage_goal_summer.classList.add("active");
}

// محدود کردن ثبت دوباره اهداف تابستان
const summer_lock_layer = document.querySelector(".summer-lock-layer");

if (month > 6 || localStorage.getItem(summer_key) !== null) {
  summer_lock_layer.classList.remove("hidden");
} else {
  summer_lock_layer.classList.add("hidden");
}

/* =================================
   صفحه پاییز
================================= */

const autumn_page = document.querySelector(".autumn-page");
const btn_select_autumn = document.querySelector(".btn-select-autumn");
const back_home_page_autumn = document.querySelector(".back-home-page-autumn");

btn_select_autumn.addEventListener("click", () => {
  page_one.classList.remove("active");
  autumn_page.classList.add("active");
  page_two.classList.remove("active");

  localStorage.setItem("autumn-page", "yes");
  localStorage.removeItem("page-one");
});

const currentPage_autumn = localStorage.getItem("autumn-page");

if (currentPage_autumn === "yes") {
  autumn_page.classList.add("active");
  home_page.classList.remove("active");
}

back_home_page_autumn.addEventListener("click", () => {
  autumn_page.classList.remove("active");
  page_two.classList.remove("active");

  localStorage.removeItem("autumn-page");
});

// راهنما
const autumn_guide_btn = document.querySelector(".autumn-guide-btn");
const autumn_guide = document.querySelector(".autumn-guide");
const autumn_close_guide = document.querySelector(".autumn-close-guide");

autumn_guide_btn.addEventListener("click", () => {
  autumn_guide.classList.add("active");
});

autumn_close_guide.addEventListener("click", () => {
  autumn_guide.classList.remove("active");
});

// افزودن هدف

const autumn_goals_btn = document.querySelector(".autumn-goals-btn");
const autumn_goals_input = document.querySelector(".autumn-goals-input");
const cnt_goal_autumn = document.querySelector(".cnt-goal-autumn");

const autumn_Set_Goal = document.querySelector(".autumn-set-goal");
const autumn_Set_Goal_exit = document.querySelector(".autumn-set-goal-exit");
const autumn_Set_Goal_exit_btn = document.querySelector(
  ".autumn-set-goal-exit-btn",
);
const autumn_edit_btn = document.querySelector(".autumn-edit-btn");

let autumn_error_showing = false;

autumn_goals_btn.addEventListener("click", () => {
  const goals_input_value = autumn_goals_input.value;
  const value_autumn = autumn_goals_input.value.trim();
  const goals_autumn = cnt_goal_autumn.querySelectorAll(".goal-bahar");

  autumn_goals_input.value = "";

  if (goals_input_value.trim() !== "") {
    // حداکثر 10 هدف
    if (goals_autumn.length >= 10) {
      if (autumn_error_showing) return;

      const Error_message_autumn_div = document.createElement("div");
      const Error_message_autumn_div_text = document.createElement("h4");

      Error_message_autumn_div_text.textContent = "حداکثر 10 هدف انتخاب کنید.";

      Error_message_autumn_div.classList.add("Error-message-bahar");

      cnt_goal_autumn.append(Error_message_autumn_div);
      Error_message_autumn_div.append(Error_message_autumn_div_text);

      autumn_error_showing = true;

      setTimeout(() => {
        Error_message_autumn_div.remove();
        autumn_error_showing = false;
      }, 4000);

      return;
    }

    // جلوگیری از هدف تکراری
    for (const goal_text of goals_autumn) {
      if (goal_text.querySelector("h4").textContent.trim() === value_autumn) {
        if (autumn_error_showing) return;

        const Error_message_autumn_Set_Goal = document.createElement("div");
        const Error_message_autumn_Set_Goal_text = document.createElement("h4");

        Error_message_autumn_Set_Goal_text.textContent =
          "لطفا اهداف تکراری وارد ننمایید.";

        Error_message_autumn_Set_Goal.classList.add("Error-message-bahar");

        cnt_goal_autumn.append(Error_message_autumn_Set_Goal);
        Error_message_autumn_Set_Goal.append(
          Error_message_autumn_Set_Goal_text,
        );

        autumn_error_showing = true;

        setTimeout(() => {
          Error_message_autumn_Set_Goal.remove();
          autumn_error_showing = false;
        }, 4000);

        return;
      }
    }

    // ساخت هدف
    const goal = document.createElement("div");
    const goal_text = document.createElement("h4");
    const icon = document.createElement("i");

    goal_text.textContent = value_autumn;

    goal.classList.add("goal-bahar");

    icon.classList.add("fa-solid", "fa-xmark", "btn-delete-goal-bahar");

    cnt_goal_autumn.append(goal);
    goal.append(goal_text, icon);

    // حذف هدف
    icon.addEventListener("click", () => {
      goal.remove();
    });
  } else {
    // هدف خالی
    if (autumn_error_showing) return;

    const Error_message_autumn = document.createElement("div");
    const Error_message_autumn_text = document.createElement("h4");

    Error_message_autumn_text.textContent = "لطفا اهداف خود را وارد کنید.";

    Error_message_autumn.classList.add("Error-message-bahar");

    cnt_goal_autumn.append(Error_message_autumn);
    Error_message_autumn.append(Error_message_autumn_text);

    autumn_error_showing = true;

    setTimeout(() => {
      Error_message_autumn.remove();
      autumn_error_showing = false;
    }, 4000);
  }
});

autumn_Set_Goal.addEventListener("click", () => {
  const goals_autumn = cnt_goal_autumn.querySelectorAll(".goal-bahar");

  if (goals_autumn.length >= 1) {
    autumn_Set_Goal_exit.classList.add("active");
  } else {
    if (autumn_error_showing) return;

    const Error_message_autumn_Set_Goal_btn = document.createElement("div");
    const Error_message_autumn_Set_Goal_btn_text = document.createElement("h4");

    Error_message_autumn_Set_Goal_btn_text.textContent =
      "حداقل یک هدف وارد نمایید.";

    Error_message_autumn_Set_Goal_btn.classList.add("Error-message-bahar");

    cnt_goal_autumn.append(Error_message_autumn_Set_Goal_btn);
    Error_message_autumn_Set_Goal_btn.append(
      Error_message_autumn_Set_Goal_btn_text,
    );

    autumn_error_showing = true;

    setTimeout(() => {
      Error_message_autumn_Set_Goal_btn.remove();
      autumn_error_showing = false;
    }, 4000);
  }
});

autumn_edit_btn.addEventListener("click", () => {
  autumn_Set_Goal_exit.classList.remove("active");
});

autumn_Set_Goal_exit_btn.addEventListener("click", () => {
  if (cnt_goal_autumn.children.length >= 1) {
    const goals_autumn = cnt_goal_autumn.querySelectorAll(".goal-bahar");

    if (goals_autumn.length < 1) {
      return;
    }

    const autumn_goal_array = [];

    for (const goal_text of goals_autumn) {
      autumn_goal_array.push(goal_text.textContent);
    }

    localStorage.setItem(autumn_key, JSON.stringify(autumn_goal_array));

    autumn_page.classList.remove("active");
    home_page.classList.add("active");
    autumn_Set_Goal_exit.classList.remove("active");

    localStorage.removeItem("autumn-page");
  }
});

const autumn_key = `autumnGoals-${year}`;
const autumn_list_goal = document.querySelector(".autumn-list-goal");

// صفحه لیست اهداف
const autumn_keys = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (key && /^autumnGoals-\d+$/.test(key)) {
    autumn_keys.push(key);
  }
}

autumn_keys.sort((a, b) => {
  return Number(b.split("-")[1]) - Number(a.split("-")[1]);
});

for (const key of autumn_keys) {
  const goal_year = Number(key.split("-")[1]);

  const cnt_my_goals_autumn = document.createElement("div");
  const cnt_text_goals_autumn = document.createElement("div");
  const image_autumn = document.createElement("img");
  const title_autumn = document.createElement("h3");
  const text_autumn = document.createElement("p");

  const btn_my_goals_autumn = document.createElement("div");
  const text_btn_my_goals_autumn = document.createElement("a");
  const icon_autumn = document.createElement("i");

  cnt_my_goals.append(cnt_my_goals_autumn);
  cnt_my_goals_autumn.append(image_autumn, cnt_text_goals_autumn);
  cnt_text_goals_autumn.append(title_autumn, text_autumn, btn_my_goals_autumn);
  btn_my_goals_autumn.append(text_btn_my_goals_autumn, icon_autumn);

  cnt_my_goals_autumn.classList.add("cnt-my-goals-autumn");
  btn_my_goals_autumn.classList.add("btn-my-goals-autumn");
  cnt_text_goals_autumn.classList.add("cnt-text-goals-autumn");

  image_autumn.src = "../img/پاییز.png";
  title_autumn.textContent = "پاییز";
  text_autumn.textContent = `مهر ${goal_year} - آذر ${goal_year}`;
  text_btn_my_goals_autumn.textContent = "لیست اهداف";
  icon_autumn.classList.add("fa-solid", "fa-arrow-right");

  btn_my_goals_autumn.addEventListener("click", () => {
    localStorage.setItem("selected-autumn-year", String(goal_year));

    showAutumnGoals(goal_year);

    autumn_list_goal.classList.add("active");
    page_two.classList.remove("active");

    localStorage.removeItem("page-two");
    localStorage.setItem("list-autumn", "yes");
  });
}

// لیست اهداف پاییز

const year_list_autumn = document.querySelector(".year-list-autumn");

const cnt_goal_autumn_edit = document.querySelector(
  ".cnt-goal-autumn-end-edit",
);
const back_home_page_list_autumn = document.querySelector(
  ".back-home-page-list-autumn",
);
const currentPage_list_autumn = localStorage.getItem("list-autumn");

let completed_goal_autumn;
let not_completed_goal_autumn;
let btn_goal_autumn_completed;
let goal_status_autumn = {};
let status_key_autumn = "";

function showAutumnGoals(selected_year) {
  cnt_goal_autumn_edit.innerHTML = "";

  year_list_autumn.textContent = selected_year;

  const selected_key = `autumnGoals-${selected_year}`;

  const autumn_goal_array =
    JSON.parse(localStorage.getItem(selected_key)) || [];

  status_key_autumn = `autumnStatus-${selected_year}`;
  goal_status_autumn =
    JSON.parse(localStorage.getItem(status_key_autumn)) || {};

  for (const autumn_goals_edit_end of autumn_goal_array) {
    const Status_goal_btn_autumn = localStorage.getItem(
      "Status_goal_btn_cnt_autumn",
    );
    const goal_autumn_cnt_edit = document.createElement("div");
    btn_goal_autumn_completed = document.createElement("div");
    const goal_autumn_title = document.createElement("h3");

    completed_goal_autumn = document.createElement("i");
    not_completed_goal_autumn = document.createElement("i");

    const compleated_goal_autumn = document.createElement("h4");
    const not_compleated_goal_autumn = document.createElement("h4");
    const unknown_goal_autumn = document.createElement("h4");

    goal_autumn_title.textContent = autumn_goals_edit_end;

    goal_autumn_cnt_edit.classList.add("goal-autumn-cnt-edit");

    btn_goal_autumn_completed.classList.add("btn-completed-autumn", "active");

    completed_goal_autumn.classList.add(
      "completed-goal-autumn",
      "fa-solid",
      "fa-check",
    );

    not_completed_goal_autumn.classList.add(
      "not-completed-goal-autumn",
      "fa-solid",
      "fa-xmark",
    );

    compleated_goal_autumn.textContent = "انجام شد";
    not_compleated_goal_autumn.textContent = "انجام نشد";
    unknown_goal_autumn.textContent = "نامشخص";

    compleated_goal_autumn.classList.add("compleated-goal-autumn");
    not_compleated_goal_autumn.classList.add("not-compleated-goal-autumn-text");
    unknown_goal_autumn.classList.add("unknown-goal-autumn");

    if (goal_status_autumn[autumn_goals_edit_end] === true) {
      compleated_goal_autumn.classList.add("active");
    } else if (goal_status_autumn[autumn_goals_edit_end] === false) {
      not_compleated_goal_autumn.classList.add("active");
    } else if (localStorage.getItem(status_key_autumn) !== null) {
      unknown_goal_autumn.classList.add("active");
    }

    if (Status_goal_btn_autumn === "compleate") {
      btn_goal_autumn_completed.classList.remove("active");
    }

    cnt_goal_autumn_edit.append(goal_autumn_cnt_edit);

    goal_autumn_cnt_edit.append(
      goal_autumn_title,
      btn_goal_autumn_completed,
      compleated_goal_autumn,
      not_compleated_goal_autumn,
      unknown_goal_autumn,
    );

    btn_goal_autumn_completed.append(
      completed_goal_autumn,
      not_completed_goal_autumn,
    );

    const completed = completed_goal_autumn;
    const not_completed = not_completed_goal_autumn;
    const goal_name = autumn_goals_edit_end;

    // دکمه انجام شد
    completed.addEventListener("click", () => {
      goal_status_autumn[goal_name] = true;

      completed.classList.toggle("change-color");
      not_completed.classList.remove("change-color");
    });

    // دکمه انجام نشد
    not_completed.addEventListener("click", () => {
      goal_status_autumn[goal_name] = false;

      not_completed.classList.toggle("change-color");
      completed.classList.remove("change-color");
    });
  }
}

if (currentPage_list_autumn === "yes") {
  const selected_year = Number(localStorage.getItem("selected-autumn-year"));

  if (selected_year && localStorage.getItem(`autumnGoals-${selected_year}`)) {
    showAutumnGoals(selected_year);

    autumn_list_goal.classList.add("active");
    home_page.classList.remove("active");
  } else {
    localStorage.removeItem("list-autumn");
  }
}

back_home_page_list_autumn.addEventListener("click", () => {
  home_page.classList.add("active");
  autumn_list_goal.classList.remove("active");

  localStorage.removeItem("list-autumn");
});

// بخش ثبت وضعیت اهداف پاییز

const Set_Status_autumn = document.querySelector(".Set-Status-Autumn");

const Set_Status_exit_autumn = document.querySelector(
  ".Set-Status-exit-autumn",
);

const Set_Status_exit_btn_autumn = document.querySelector(
  ".Set-Status-exit-btn-autumn",
);

const edit_btn_Status_autumn = document.querySelector(
  ".edit-btn-Status-autumn",
);

const title_goal_autumn = document.querySelector(".title-goal-autumn");

const autumn_title_selector = localStorage.getItem(
  "Status_goal_btn_cnt_autumn",
);

const back_endpage_goal_autumn = document.querySelector(
  ".back-end-page-goal-autumn",
);

// باز کردن پنجره تأیید
Set_Status_autumn.addEventListener("click", () => {
  Set_Status_exit_autumn.classList.add("active");
});

// ویرایش وضعیت‌ها
edit_btn_Status_autumn.addEventListener("click", () => {
  Set_Status_exit_autumn.classList.remove("active");
});

// ثبت نهایی وضعیت اهداف پاییز
Set_Status_exit_btn_autumn.addEventListener("click", () => {
  localStorage.setItem(status_key_autumn, JSON.stringify(goal_status_autumn));

  localStorage.setItem("Status_goal_btn_cnt_autumn", "compleate");

  home_page.classList.add("active");
  autumn_list_goal.classList.remove("active");
  Set_Status_exit_autumn.classList.remove("active");

  localStorage.removeItem("list-autumn");
});

// برگشت به لیست فصل‌ها
back_endpage_goal_autumn.addEventListener("click", () => {
  page_two.classList.add("active");
  autumn_list_goal.classList.remove("active");

  localStorage.removeItem("list-autumn");
});

// بررسی ثبت قبلی وضعیت اهداف پاییز
if (autumn_title_selector === "compleate") {
  title_goal_autumn.textContent = "";

  Set_Status_autumn.classList.remove("active");
  back_endpage_goal_autumn.classList.add("active");
}

// محدود کردن ثبت دوباره اهداف پاییز
const autumn_lock_layer = document.querySelector(".autumn-lock-layer");

if (month > 9 || localStorage.getItem(autumn_key) !== null) {
  autumn_lock_layer.classList.remove("hidden");
} else {
  autumn_lock_layer.classList.add("hidden");
}

/* =================================
   صفحه زمستان
================================= */

const winter_page = document.querySelector(".winter-page");
const btn_select_winter = document.querySelector(".btn-select-winter");
const back_home_page_winter = document.querySelector(".back-home-page-winter");

btn_select_winter.addEventListener("click", () => {
  page_one.classList.remove("active");
  winter_page.classList.add("active");
  page_two.classList.remove("active");

  localStorage.setItem("winter-page", "yes");
  localStorage.removeItem("page-one");
});

const currentPage_winter = localStorage.getItem("winter-page");

if (currentPage_winter === "yes") {
  winter_page.classList.add("active");
  home_page.classList.remove("active");
}

back_home_page_winter.addEventListener("click", () => {
  winter_page.classList.remove("active");
  page_two.classList.remove("active");

  localStorage.removeItem("winter-page");
});

// راهنما
const winter_guide_btn = document.querySelector(".winter-guide-btn");
const winter_guide = document.querySelector(".winter-guide");
const winter_close_guide = document.querySelector(".winter-close-guide");

winter_guide_btn.addEventListener("click", () => {
  winter_guide.classList.add("active");
});

winter_close_guide.addEventListener("click", () => {
  winter_guide.classList.remove("active");
});

// افزودن هدف

const winter_goals_btn = document.querySelector(".winter-goals-btn");
const winter_goals_input = document.querySelector(".winter-goals-input");
const cnt_goal_winter = document.querySelector(".cnt-goal-winter");

const winter_Set_Goal = document.querySelector(".winter-set-goal");
const winter_Set_Goal_exit = document.querySelector(".winter-set-goal-exit");
const winter_Set_Goal_exit_btn = document.querySelector(
  ".winter-set-goal-exit-btn",
);
const winter_edit_btn = document.querySelector(".winter-edit-btn");

let winter_error_showing = false;

winter_goals_btn.addEventListener("click", () => {
  const goals_input_value = winter_goals_input.value;
  const value_winter = winter_goals_input.value.trim();
  const goals_winter = cnt_goal_winter.querySelectorAll(".goal-bahar");

  winter_goals_input.value = "";

  if (goals_input_value.trim() !== "") {
    // حداکثر 10 هدف
    if (goals_winter.length >= 10) {
      if (winter_error_showing) return;

      const Error_message_winter_div = document.createElement("div");
      const Error_message_winter_div_text = document.createElement("h4");

      Error_message_winter_div_text.textContent = "حداکثر 10 هدف انتخاب کنید.";

      Error_message_winter_div.classList.add("Error-message-bahar");

      cnt_goal_winter.append(Error_message_winter_div);
      Error_message_winter_div.append(Error_message_winter_div_text);

      winter_error_showing = true;

      setTimeout(() => {
        Error_message_winter_div.remove();
        winter_error_showing = false;
      }, 4000);

      return;
    }

    // جلوگیری از هدف تکراری
    for (const goal_text of goals_winter) {
      if (goal_text.querySelector("h4").textContent.trim() === value_winter) {
        if (winter_error_showing) return;

        const Error_message_winter_Set_Goal = document.createElement("div");
        const Error_message_winter_Set_Goal_text = document.createElement("h4");

        Error_message_winter_Set_Goal_text.textContent =
          "لطفا اهداف تکراری وارد ننمایید.";

        Error_message_winter_Set_Goal.classList.add("Error-message-bahar");

        cnt_goal_winter.append(Error_message_winter_Set_Goal);
        Error_message_winter_Set_Goal.append(
          Error_message_winter_Set_Goal_text,
        );

        winter_error_showing = true;

        setTimeout(() => {
          Error_message_winter_Set_Goal.remove();
          winter_error_showing = false;
        }, 4000);

        return;
      }
    }

    // ساخت هدف
    const goal = document.createElement("div");
    const goal_text = document.createElement("h4");
    const icon = document.createElement("i");

    goal_text.textContent = value_winter;

    goal.classList.add("goal-bahar");

    icon.classList.add("fa-solid", "fa-xmark", "btn-delete-goal-bahar");

    cnt_goal_winter.append(goal);
    goal.append(goal_text, icon);

    // حذف هدف
    icon.addEventListener("click", () => {
      goal.remove();
    });
  } else {
    // هدف خالی
    if (winter_error_showing) return;

    const Error_message_winter = document.createElement("div");
    const Error_message_winter_text = document.createElement("h4");

    Error_message_winter_text.textContent = "لطفا اهداف خود را وارد کنید.";

    Error_message_winter.classList.add("Error-message-bahar");

    cnt_goal_winter.append(Error_message_winter);
    Error_message_winter.append(Error_message_winter_text);

    winter_error_showing = true;

    setTimeout(() => {
      Error_message_winter.remove();
      winter_error_showing = false;
    }, 4000);
  }
});

winter_Set_Goal.addEventListener("click", () => {
  const goals_winter = cnt_goal_winter.querySelectorAll(".goal-bahar");

  if (goals_winter.length >= 1) {
    winter_Set_Goal_exit.classList.add("active");
  } else {
    if (winter_error_showing) return;

    const Error_message_winter_Set_Goal_btn = document.createElement("div");
    const Error_message_winter_Set_Goal_btn_text = document.createElement("h4");

    Error_message_winter_Set_Goal_btn_text.textContent =
      "حداقل یک هدف وارد نمایید.";

    Error_message_winter_Set_Goal_btn.classList.add("Error-message-bahar");

    cnt_goal_winter.append(Error_message_winter_Set_Goal_btn);
    Error_message_winter_Set_Goal_btn.append(
      Error_message_winter_Set_Goal_btn_text,
    );

    winter_error_showing = true;

    setTimeout(() => {
      Error_message_winter_Set_Goal_btn.remove();
      winter_error_showing = false;
    }, 4000);
  }
});

winter_edit_btn.addEventListener("click", () => {
  winter_Set_Goal_exit.classList.remove("active");
});

winter_Set_Goal_exit_btn.addEventListener("click", () => {
  if (cnt_goal_winter.children.length >= 1) {
    const goals_winter = cnt_goal_winter.querySelectorAll(".goal-bahar");

    if (goals_winter.length < 1) {
      return;
    }

    const winter_goal_array = [];

    for (const goal_text of goals_winter) {
      winter_goal_array.push(goal_text.textContent);
    }

    localStorage.setItem(winter_key, JSON.stringify(winter_goal_array));

    winter_page.classList.remove("active");
    home_page.classList.add("active");
    winter_Set_Goal_exit.classList.remove("active");

    localStorage.removeItem("winter-page");
  }
});

const winter_key = `winterGoals-${year}`;
const winter_list_goal = document.querySelector(".winter-list-goal");

// صفحه لیست اهداف
const winter_keys = [];

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);

  if (key && /^winterGoals-\d+$/.test(key)) {
    winter_keys.push(key);
  }
}

winter_keys.sort((a, b) => {
  return Number(b.split("-")[1]) - Number(a.split("-")[1]);
});

for (const key of winter_keys) {
  const goal_year = Number(key.split("-")[1]);

  const cnt_my_goals_winter = document.createElement("div");
  const cnt_text_goals_winter = document.createElement("div");
  const image_winter = document.createElement("img");
  const title_winter = document.createElement("h3");
  const text_winter = document.createElement("p");

  const btn_my_goals_winter = document.createElement("div");
  const text_btn_my_goals_winter = document.createElement("a");
  const icon_winter = document.createElement("i");

  cnt_my_goals.append(cnt_my_goals_winter);
  cnt_my_goals_winter.append(image_winter, cnt_text_goals_winter);
  cnt_text_goals_winter.append(title_winter, text_winter, btn_my_goals_winter);
  btn_my_goals_winter.append(text_btn_my_goals_winter, icon_winter);

  cnt_my_goals_winter.classList.add("cnt-my-goals-winter");
  btn_my_goals_winter.classList.add("btn-my-goals-winter");
  cnt_text_goals_winter.classList.add("cnt-text-goals-winter");

  image_winter.src = "../img/زمستان.png";
  title_winter.textContent = "زمستان";
  text_winter.textContent = `دی ${goal_year} - اسفند ${goal_year}`;
  text_btn_my_goals_winter.textContent = "لیست اهداف";
  icon_winter.classList.add("fa-solid", "fa-arrow-right");

  btn_my_goals_winter.addEventListener("click", () => {
    localStorage.setItem("selected-winter-year", String(goal_year));

    showWinterGoals(goal_year);

    winter_list_goal.classList.add("active");
    page_two.classList.remove("active");

    localStorage.removeItem("page-two");
    localStorage.setItem("list-winter", "yes");
  });
}

// لیست اهداف زمستان

const year_list_winter = document.querySelector(".year-list-winter");

const cnt_goal_winter_edit = document.querySelector(
  ".cnt-goal-winter-end-edit",
);
const back_home_page_list_winter = document.querySelector(
  ".back-home-page-list-winter",
);
const currentPage_list_winter = localStorage.getItem("list-winter");

let completed_goal_winter;
let not_completed_goal_winter;
let btn_goal_winter_completed;
let goal_status_winter = {};
let status_key_winter = "";

function showWinterGoals(selected_year) {
  cnt_goal_winter_edit.innerHTML = "";

  year_list_winter.textContent = selected_year;

  const selected_key = `winterGoals-${selected_year}`;

  const winter_goal_array =
    JSON.parse(localStorage.getItem(selected_key)) || [];

  status_key_winter = `winterStatus-${selected_year}`;
  goal_status_winter =
    JSON.parse(localStorage.getItem(status_key_winter)) || {};

  for (const winter_goals_edit_end of winter_goal_array) {
    const Status_goal_btn_winter = localStorage.getItem(
      "Status_goal_btn_cnt_winter",
    );

    const goal_winter_cnt_edit = document.createElement("div");
    btn_goal_winter_completed = document.createElement("div");
    const goal_winter_title = document.createElement("h3");

    completed_goal_winter = document.createElement("i");
    not_completed_goal_winter = document.createElement("i");

    const compleated_goal_winter = document.createElement("h4");
    const not_compleated_goal_winter = document.createElement("h4");
    const unknown_goal_winter = document.createElement("h4");

    goal_winter_title.textContent = winter_goals_edit_end;

    goal_winter_cnt_edit.classList.add("goal-winter-cnt-edit");

    btn_goal_winter_completed.classList.add("btn-completed-winter", "active");

    completed_goal_winter.classList.add(
      "completed-goal-winter",
      "fa-solid",
      "fa-check",
    );

    not_completed_goal_winter.classList.add(
      "not-completed-goal-winter",
      "fa-solid",
      "fa-xmark",
    );

    compleated_goal_winter.textContent = "انجام شد";
    not_compleated_goal_winter.textContent = "انجام نشد";
    unknown_goal_winter.textContent = "نامشخص";

    compleated_goal_winter.classList.add("compleated-goal-winter");
    not_compleated_goal_winter.classList.add("not-compleated-goal-winter-text");
    unknown_goal_winter.classList.add("unknown-goal-winter");

    if (goal_status_winter[winter_goals_edit_end] === true) {
      compleated_goal_winter.classList.add("active");
    } else if (goal_status_winter[winter_goals_edit_end] === false) {
      not_compleated_goal_winter.classList.add("active");
    } else if (localStorage.getItem(status_key_winter) !== null) {
      unknown_goal_winter.classList.add("active");
    }

    if (Status_goal_btn_winter === "compleate") {
      btn_goal_winter_completed.classList.remove("active");
    }

    cnt_goal_winter_edit.append(goal_winter_cnt_edit);

    goal_winter_cnt_edit.append(
      goal_winter_title,
      btn_goal_winter_completed,
      compleated_goal_winter,
      not_compleated_goal_winter,
      unknown_goal_winter,
    );

    btn_goal_winter_completed.append(
      completed_goal_winter,
      not_completed_goal_winter,
    );

    const completed = completed_goal_winter;
    const not_completed = not_completed_goal_winter;
    const goal_name = winter_goals_edit_end;

    // دکمه انجام شد
    completed.addEventListener("click", () => {
      goal_status_winter[goal_name] = true;

      completed.classList.toggle("change-color");
      not_completed.classList.remove("change-color");
    });

    // دکمه انجام نشد
    not_completed.addEventListener("click", () => {
      goal_status_winter[goal_name] = false;

      not_completed.classList.toggle("change-color");
      completed.classList.remove("change-color");
    });
  }
}

if (currentPage_list_winter === "yes") {
  const selected_year = Number(localStorage.getItem("selected-winter-year"));

  if (selected_year && localStorage.getItem(`winterGoals-${selected_year}`)) {
    showWinterGoals(selected_year);

    winter_list_goal.classList.add("active");
    home_page.classList.remove("active");
  } else {
    localStorage.removeItem("list-winter");
  }
}

back_home_page_list_winter.addEventListener("click", () => {
  home_page.classList.add("active");
  winter_list_goal.classList.remove("active");

  localStorage.removeItem("list-winter");
});

// بخش ثبت وضعیت اهداف زمستان

const Set_Status_winter = document.querySelector(".Set-Status-Winter");

const Set_Status_exit_winter = document.querySelector(
  ".Set-Status-exit-winter",
);

const Set_Status_exit_btn_winter = document.querySelector(
  ".Set-Status-exit-btn-winter",
);

const edit_btn_Status_winter = document.querySelector(
  ".edit-btn-Status-winter",
);

const title_goal_winter = document.querySelector(".title-goal-winter");

const winter_title_selector = localStorage.getItem(
  "Status_goal_btn_cnt_winter",
);

const back_endpage_goal_winter = document.querySelector(
  ".back-end-page-goal-winter",
);

// باز کردن پنجره تأیید
Set_Status_winter.addEventListener("click", () => {
  Set_Status_exit_winter.classList.add("active");
});

// ویرایش وضعیت‌ها
edit_btn_Status_winter.addEventListener("click", () => {
  Set_Status_exit_winter.classList.remove("active");
});

// ثبت نهایی وضعیت اهداف زمستان
Set_Status_exit_btn_winter.addEventListener("click", () => {
  localStorage.setItem(status_key_winter, JSON.stringify(goal_status_winter));

  localStorage.setItem("Status_goal_btn_cnt_winter", "compleate");

  home_page.classList.add("active");
  winter_list_goal.classList.remove("active");
  Set_Status_exit_winter.classList.remove("active");

  localStorage.removeItem("list-winter");
});

// برگشت به لیست فصل‌ها
back_endpage_goal_winter.addEventListener("click", () => {
  page_two.classList.add("active");
  winter_list_goal.classList.remove("active");

  localStorage.removeItem("list-winter");
});

// بررسی ثبت قبلی وضعیت اهداف زمستان
if (winter_title_selector === "compleate") {
  title_goal_winter.textContent = "";

  Set_Status_winter.classList.remove("active");
  back_endpage_goal_winter.classList.add("active");
}

// محدود کردن ثبت دوباره اهداف زمستان
const winter_lock_layer = document.querySelector(".winter-lock-layer");

if (localStorage.getItem(winter_key) !== null) {
  winter_lock_layer.classList.remove("hidden");
} else {
  winter_lock_layer.classList.add("hidden");
}
