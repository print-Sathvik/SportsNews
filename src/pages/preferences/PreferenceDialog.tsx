import React, { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { useTeamsState } from "../../context/teams/context";
import { Sport } from "../../context/articles/types";
import { fetchSports } from "../../context/articles/actions";
import { updatePreferences } from "../../context/preferences/actions";
import {
  usePreferencesDispatch,
  usePreferencesState,
} from "../../context/preferences/context";
import { useTranslation } from "react-i18next";

const PreferenceDialog = () => {
  const navigate = useNavigate();
  const [sports, setSports] = useState<Sport[]>([]);
  const teams = useTeamsState();
  const preferences = usePreferencesState();
  const preferencesDispatch = usePreferencesDispatch();
  const { t } = useTranslation()

  useEffect(() => {
    fetchSports(setSports);
    !localStorage.getItem("authToken") && navigate("/");
  }, []);

  const handleSportsSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = event.target.value;
    preferencesDispatch({
      type: "FETCH_PREFERENCES_REQUEST",
      payload: {
        teams: preferences.teams,
        sports: preferences.sports.includes(value)
          ? preferences.sports.filter((sport: String) => sport !== value)
          : [...preferences.sports, value],
      },
    });
  };

  const handleTeamsSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value, preferences, preferencesDispatch);
    preferencesDispatch({
      type: "FETCH_PREFERENCES_REQUEST",
      payload: {
        sports: preferences.sports,
        teams: preferences.teams.includes(value)
          ? preferences.teams.filter((team: String) => team !== value)
          : [...preferences.teams, value],
      },
    });
  };

  const handleClose = () => {
    navigate("/");
  };

  const savePreferences = () => {
    updatePreferences(preferencesDispatch, preferences);
  };

  return (
    <Transition
      as={Fragment}
      show
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Dialog
        open={true}
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto w-3/4 m-auto"
        onClose={() => {}}
      >
        <Dialog.Panel className="w-full">
          <div className="flex items-center justify-center">
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            <div className="relative bg-white p-6 rounded-lg">
              <Dialog.Title className="text-2xl font-bold text-center">
                {t("Preferences")}
              </Dialog.Title>
              <div>
                <h3 className="mt-4 text-xl font-semibold">Sports</h3>
                <div className="mt-1 space-y-4 flex flex-wrap">
                  {sports.map((sport, index) => (
                    <div key={index} className="flex space-x-4">
                      <div
                        key={sport.id}
                        className="flex items-center space-x-2 px-4 w-48"
                      >
                        <input
                          type="checkbox"
                          id={`s${index}`}
                          value={sport.name}
                          checked={preferences.sports.includes(sport.name)}
                          onChange={handleSportsSelection}
                          className="w-4 h-4 text-blue-500 focus:ring focus:ring-blue-300"
                        />
                        <label htmlFor={`s${index}`}>{t(sport.name)}</label>
                      </div>
                    </div>
                  ))}
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-2 px-4 w-48">
                      <input
                        type="checkbox"
                        id="danger-box"
                        value="danger"
                        onChange={() => {
                          const e = new Error("You selected forbidden option")
                          e.name = "OptionError"
                          throw e
                        }}
                        className="w-4 h-4 text-blue-500 focus:ring focus:ring-blue-300"
                      />
                      <label htmlFor="danger-box">Do Not Select Me</label>
                    </div>
                  </div>
                </div>
                <hr className="my-4" />
                <h3 className="text-xl font-semibold">Teams</h3>
                <div className="mt-1 space-y-4 flex flex-wrap">
                  {teams.map((team, index) => (
                    <div key={index} className="flex space-x-4">
                      <div
                        key={team.id}
                        className="flex items-center space-x-2 px-4 w-48"
                      >
                        <input
                          type="checkbox"
                          id={`s${index}`}
                          value={team.name}
                          checked={preferences.teams.includes(team.name)}
                          onChange={handleTeamsSelection}
                          className="w-4 h-4 text-blue-500 focus:ring focus:ring-blue-300"
                        />
                        <label htmlFor={`t${index}`}>{team.name}</label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                  {t("cancelButton")}
                </button>
                <button
                  onClick={() => {
                    console.log("Selected Checkboxes:", preferences);
                    savePreferences();
                    handleClose();
                  }}
                  className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-md focus:outline-none"
                >
                  {t("saveButton")}
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default PreferenceDialog;
